import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Collapse,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Nav,
	Navbar as ReactstrapNavbar,
	NavbarBrand,
	NavbarToggler,
	NavItem,
	NavLink,
	UncontrolledDropdown,
} from "reactstrap";
import {Link} from "react-router-dom";
import path from "path";
import PropTypes from "prop-types";


const Logo = props => (
    <img
        alt="Guild of Educators in TESOL International Institute"
        src={path.join(process.env.PUBLIC_URL, "/img/GET-logo.png")}
        {...props} //used to pass additional props, a spread operator
    ></img>
);  


const LINKS = [
	{
		page: "About",
		link: "/about",
	},
	{
		page: "Contact Us",
		link: "/contact",
	},
    {
		page: "Administration",
		link: "/administration",
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

class Navbar extends React.Component {
    state = {
        isOpen: false,
    };
}