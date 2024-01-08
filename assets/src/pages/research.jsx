import React, { useEffect, useState } from "react";
import '../App.css';
import MemberForm from "../components/MemberForm";
import { useAuth } from "../Context/AuthContext";
import { Link, useParams } from "react-router-dom";
import Archives from "../components/archives";
import AboutJournal from "../components/aboutJournal";
import Information from "../components/information";
import ResearchHome from "../components/research-home";
import ResearchHeader from "../components/research-header.jsx";


function Research() {
	const { login, isLoggedin } = useAuth();
    const handleSubmit = (token) => {
		login(token)
	}

    const { section } = useParams();

    let content;

    switch(section) {
        case 'archives':
            content = <Archives />
            break;
        case 'home':
            content = <ResearchHome />
            break;
        case 'aboutJournal':
            content = <AboutJournal />
            break;
        case 'information':
            content = <Information />
            break;
        default:
            content = <h1>Please return to Homepage tnks</h1>
            break;
    }

    return (
        <div className="research">
            <ResearchHeader />
            {content}
        </div>
    );
}

export default Research;