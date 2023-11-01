import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


const LINKS = [
	{
		page: "Home",
		link: "/",
	},
	{
		page: "About",
		link: "/about",
		subLinks: [
			{title: "History of GET International", link: '/about/background'},
			{title: "Vision, Mission and Core Values", link: '/about/vmc'}
		]
	},
	{
		page: "Administration",
		link: "/administration",
		subLinks: [
			{title: "Message of the President", link: '/administration/president'},
			{title: "Message of the Vice President for International Linkages and Research Publication", link: '/administration/vicepresident'}
		]
	},
	{
		page: "Contact Us",
		link: "/contact",
	},
    {
		page: "Academics",
		link: "/academics",
	},
    {
		page: "Research",
		link: "/research",
	},
];


function NavBar(){
	//<img src="../img/GET-logo.png"></img>
	//this is a hook
	//hooks can only be used inside functions.
	//it's no longer a function, so no need to use this when referencing it
	const renderDropdownItems = (subLinks) => {
		return subLinks.map((item, index) => (
		  <NavDropdown.Item key={index} href={item.link}>
			{item.title}
		  </NavDropdown.Item>
		));
	}

	return (
		<Navbar sticky="top" collapseOnSelect expand="lg" className="navbar">
			<Container>
				<Navbar.Brand>
					<img src="../img/GET-logo.png" alt="GET logo" href='/' className="logo"></img>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="nav-contain">
						{LINKS.map((link,index) => (
							link.subLinks ? (
								<NavDropdown key={index} title={link.page} id={`nav-dropdown-${index}`} className="nav-dropdown">
									{renderDropdownItems(link.subLinks)}
								</NavDropdown>
							) : (
								<Nav.Link key={index} href={link.link}>
									{link.page}
								</Nav.Link>
							)

						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
	
}

export default NavBar;

