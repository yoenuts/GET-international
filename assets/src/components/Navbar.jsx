import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Logo = props => (
    <img
        alt="Guild of Educators in TESOL International Institute"
        src="./img/GET-logo.png"
        {...props} //used to pass additional props, a spread operator
    ></img>
);  


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

class NavBar extends React.Component {

	renderDropdownItems(subLinks) {
		return subLinks.map((item, index) => (
		  <NavDropdown.Item key={index} href={item.link}>
			{item.title}
		  </NavDropdown.Item>
		));
	}


	render(){
		return (
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand  href="/">
						<img alt="GET International" src="./public/img/GET-logo.png"></img>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							{LINKS.map((link,index) => (
								link.subLinks ? (
									<NavDropdown key={index} title={link.page} id={'nav-dropdown-${index}'}>
										{this.renderDropdownItems(link.subLinks)}
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
}

export default NavBar;