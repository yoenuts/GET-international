import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { useAuth } from "../Context/AuthContext";
import MemberForm from "./MemberForm";
import axios from "axios";


const LINKS = [
	{
		page: "HOME",
		link: "/",
	},
	{
		page: "ABOUT",
		link: "/about",
		subLinks: [
			{title: "History of GET International", link: '/about/background'},
			{title: "Vision, Mission and Core Values", link: '/about/vmc'},
		]
	},
	{
		page: "ADMINISTRATION",
		link: "/administration",
		subLinks: [
			{title: "Message of the President", link: '/administration/president'},
			{title: "Message of the Vice President for International Linkages and Research Publication", link: '/administration/vicepresident'}
		]
	},
	{
		page: "CONTACT",
		link: "/contact",
	},
	/*
    {
		page: "ACADEMICS",
		link: "/academics",
	},
	*/
    {
		page: "RESEARCH",
		link: "/research",
		subLinks: [
			{title: "Archives", link: '/research/archives'}
		]
	},	
];


function NavBar() {
	const {isLoggedin, login, logout, admin, userID } = useAuth();
	const [showForm, setShowForm] = useState(false);
	const [showVerify, setShowVerify] = useState(false);
	const [userStatus, setUserStatus] = useState(false);
	/**
	//<img src="../img/GET-logo.png"></img>
	//this is a hook
	//hooks can only be used inside functions.
	//it's no longer a function, so no need to use this when referencing it
	renderDropdownItems = (subLinks) => {
		return subLinks.map((item, index) => (
		  <NavDropdown.Item key={index} href={item.link}>
			{item.title}
		  </NavDropdown.Item>
		));
		}
	**/

	//when user logs in, handle these states
	const handleSubmit = (token) => {
		login(token)
		setShowForm(false);

	}

	const handleVerifySubmit = () => {
		setShowVerify(false);
	}

	useEffect(() => {
		// When showVerify becomes true, set setShowForm to false
		if (showVerify) {
		  setShowForm(false);
		}
	
		// Your existing logic for fetching user status
		const fetchUserStatus = async () => {
		  try {
			if (!admin && isLoggedin) {
			  const response = await axios.post("http://localhost:8080/TESOL/controller/Verify.php", { userID }, {
				headers: {
				  'Content-Type': 'application/json',
				}
			  });
	
			  console.log(response);
			  const { status } = response.data;
	
			  if (status === 1) {
				setUserStatus(true);
			  } else {
				setUserStatus(false);
			  }
			}
		  } catch (error) {
			console.error("Error fetching user status:", error);
		  }
		};
	
		// Fetch user status when the component mounts or when isLoggedin or admin changes
		fetchUserStatus();
	  }, [showVerify, admin, isLoggedin, userID]);



	const renderNavItem = () => {
		return (
		  <NavDropdown title={<h6 className="linkText">MY ACCOUNT</h6>} className="nav-drop">
			<NavDropdown.Item>
			  {admin ? (
				<Link to="/AdminDashboard"><h6 className="linkText"> Dashboard </h6></Link>
			  ) : !userStatus ? (
				<Nav.Link onClick={() => setShowVerify(true)}>
					<h6 className="linkText">Verify My Account</h6>
				</Nav.Link>
			  ) : (
				<Link to="/dashboard"><h6 className="linkText"> Upload an Article </h6></Link>
			  )}
			</NavDropdown.Item>

			<NavDropdown.Divider />
			<NavDropdown.Item>
			  <Link to="/" onClick={(e) => { logout(e) }}><h6 className="linkText">Logout</h6></Link>
			</NavDropdown.Item>
		  </NavDropdown>
		);
	  }


	return(
 
		<Navbar collapseOnSelect expand="lg" className="navbar">
			<Container>
				<Navbar.Brand>
						<Link to='/'>
							<img src="../img/GET-logo.png" alt="Guild of Educators in TESOL International Institute" className="logo"></img>
						</Link>
				</Navbar.Brand>
				<div className="title-container">
					<Link to='/' style={{textDecoration:'none'}}>
						<h5 className="logotitle1">Guild of Educators in TESOL</h5>
						<h6 className="logotitle2"><b>I N T E R N A T I O N A L</b></h6>
					</Link>
				</div>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="nav-contain">
						<React.Fragment>
							{LINKS.map((link,index) => (
								link.subLinks ? (
									<NavDropdown key={index} title={<Link to={link.link} className="linkText"><h6>{link.page}</h6></Link>} id={`nav-dropdown-${index}`} className="nav-drop" show="false" as={Link} to={link.link}>
										{link.subLinks.map((subLink,subIndex) => (
											<NavDropdown.Item key={subIndex} as={Link} to={subLink.link}>
												<h6 className="linkText">{subLink.title}</h6>
											</NavDropdown.Item>
										))}
									</NavDropdown>
								) : (
									<Nav.Link key={index} as={Link} to={link.link}>
										<h6 className="linkText">{link.page}</h6>
									</Nav.Link>
								)

							))}
							
						</React.Fragment>
						{!isLoggedin ? 			
							(<Nav.Link onClick={() => setShowForm(true)}>
								<h6 className="linkText">Login/Sign up</h6>
							</Nav.Link>) : 
							(renderNavItem())
						}
						{showForm && (
							<MemberForm
							handleSubmit={handleSubmit}
							/>
						)}

						{
							showVerify && (
								<VerifyForm />
							)
						}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>												

	)						
	
}

export default NavBar;

