import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../App.css';


const SOCIAL_LINKS = [
	{
		name: "Facebook",
		link: "https://www.facebook.com/TESOLintl",
		icon: "facebook-f",
	},
];

class Footer extends React.Component {
	render() {
		return (
            <div className='Footer'>
                <div className="row">
                    <h3>GET International Research Journal is indexed by:</h3>
                    <div className="col d-flex justify-content-center">
                        <img src="./img/issn-logo.png" alt="issn-logo" />
                    </div>

                </div>
                
            </div>
		);
	}
}

export default Footer;
