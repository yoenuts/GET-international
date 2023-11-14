import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


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
			{title: "Vision, Mission and Core Values", link: '/about/vmc'}
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
    {
		page: "ACADEMICS",
		link: "/academics",
	},
    {
		page: "RESEARCH",
		link: "/research",
		subLinks: [
			{title: "Archives", link: '/research/archives'}
		]
	},
];


function NavBar() {
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
	return(

		<Navbar sticky="top" collapseOnSelect expand="lg" className="navbar">
			<Container>
				<Navbar.Brand>
						<Link to='/'>
							<img src="../img/GET-logo.png" alt="Guild of Educators in TESOL International Institute" className="logo"></img>
						</Link>
				</Navbar.Brand>
				<div className="title-container">
					<Link to='/' style={{textDecoration:'none'}}>
						<h5 className="logotitle1">Guild of Educators in TESOL</h5>
						<h6 className="logotitle2"><bold>I N T E R N A T I O N A L</bold></h6>
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
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>												

	)						
	
}

export default NavBar;

