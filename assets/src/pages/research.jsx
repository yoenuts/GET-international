import React from "react";

class Research extends React.Component {

    render(){
        return(
            <div className="Research">
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
                                        <strong>Established:</strong>2023
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Research;