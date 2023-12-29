import React, { useEffect, useState } from "react";
import '../App.css';
import MemberForm from "../components/MemberForm";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";

function Research() {
	const { login, isLoggedin } = useAuth();
    const handleSubmit = (token) => {
		login(token)
	}

    return (
        <div className="archives">
            {!isLoggedin ? <MemberForm handleSubmit={handleSubmit} /> : null}

            <div className="research-top-div">
                    <div className="row">
                        <div className="col d-flex">
                            <div className="col d-flex justify-content-center">
                                <img className="research-logo" src="./img/GET-logo.png" alt="GET-logo" />
                            </div>
                        </div>
                        <div className="col d-flex align-items-center">
                            <div className="title-header">
                                <h1>Guild of Educators in TESOL International</h1>
                                <h3><i>Your gateway to endless opportunities</i></h3>
                                <ul>
                                    <li> 
                                        <strong>ISSN:</strong> <a href="https://portal.issn.org/resource/ISSN/2984-7176">2984-7176 (Print)</a> | <a href="https://portal.issn.org/resource/ISSN/2984-7184">2984-7184 (Online)</a>
                                    </li>
                                    <li> 
                                        <strong>Publisher:</strong> Guild of Educators in TESOL International Institute – Graduate School for Teachers Inc.
                                    </li>
                                    <li> 
                                        <strong>Publication Format:</strong> Online
                                    </li>
                                    <li> 
                                        <strong>Frequency:</strong> 4 issues per year (February, May, August, and November.)
                                    </li>
                                    <li> 
                                        <strong>Language:</strong> English | Filipino
                                    </li>

                                    <li> 
                                        <strong>Established:</strong> 2023
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
            </div>

                <section className="research-content-div">
                    <div className="row">
                        <div className="col d-flex justify-content-center align-items-center" id="issue-cover-div">
                            <div className="archive-front-div">
                                <Link to="/archives/1">
                                    <img src="/img/issue01.png" alt="issue-1-front-page" className="front-page-img"></img>
                                </Link>
                                <h3>Volume 1 Issue 01 (2023): February </h3>
                            </div>
                        </div>

                        <div className="col d-flex justify-content-center align-items-center" id="issue-cover-div">
                            <div className="archive-front-div">
                                <Link to="/archives/2">
                                    <img src="/img/issue02.png" alt="issue-2-front-page" className="front-page-img"></img>
                                </Link>
                                <h3>Volume 1 Issue 02 (2023): May</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col d-flex justify-content-center align-items-center" id="issue-cover-div">
                            <div className="archive-front-div">
                                <Link to="/archives/3">
                                    <img src="/img/issue03.png" alt="issue-3-front-page" className="front-page-img"></img>
                                </Link>
                                <h3>Volume 1 Issue 03 (2023): August</h3>
                            </div>
                        </div>

                        <div className="col d-flex justify-content-center align-items-center" id="issue-cover-div">
                            <div className="archive-front-div">
                                <Link to="/archives/4">
                                    <img src="/img/issue03.png" alt="issue-4-front-page" className="front-page-img" ></img>
                                </Link>
                                <h3>Volume 1 Issue 04 (2023): December</h3>
                            </div>
                        </div>
                    </div>
                </section>

        </div>
    );
}

export default Research;