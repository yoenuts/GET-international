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
                                        <strong>Established:</strong> 2023
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="research-content-div">
                    <div className="row">
                        <div className="col d-flex align-items-center">
                            <b>GUILD OF EDUCATORS IN TESOL INTERNATIONAL INSTITUTE</b> is a progressive knowledge generating institution that is 
                            internationally -recognized for quality English language trainings, seminar, workshops, and conference. It aims to provide relevant, quality, and accessible seminar; 
                            to deliver innovative, and interactive workshops, and, to produce highly competitive and functional trainings for teachers and other professions. GET International Research Journal aims to promote English language education to educators across all disciplines, 
                            to provide excellent training in language education through open learning, seminars and workshops, to enable the educators to be expert in the teaching of English to speakers of other languages and to be a leading 
                            center of excellence in the continuing professional development for teachers and other professions locally and internationally.
                        </div>

                        <div className="col d-flex">
                            
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Research;