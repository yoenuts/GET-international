import React, { useEffect, useState } from "react";
import '../App.css';
import MemberForm from "../components/MemberForm";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";

function ResearchHome() {
	const { login, isLoggedin } = useAuth();
    const handleSubmit = (token) => {
		login(token)
	}

    return (
        <div className="researchHome">
            {!isLoggedin ? <MemberForm handleSubmit={handleSubmit} /> : null}

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

export default ResearchHome;