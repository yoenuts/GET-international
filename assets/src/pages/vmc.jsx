import React from "react";
import { Link } from "react-router-dom";

class VMC extends React.Component {

    render(){
        return(
            <div className="VMC" style={{marginLeft: '20px'}}>
                <div className="row">
                    <div className="col-md-9 mt-5 mb-5">
                        
                        <div className="row">
                            <div className="col d-flex align-items-center ml-5">
                                <h3 className="pl-5">
                                    <span className="child-title">
                                        VISION
                                    </span>
                                </h3>
                                <hr class="title-rule"></hr>
                            </div>
                            <div className="row justify-content-center">
                                <h3><q>To be a leading center of excellence in the continuing professional development for teachers locally and internationally.</q></h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="row">
                                <div className="col d-flex align-items-center ml-5">
                                    <h3 className="pl-5">
                                        <span className="child-title">
                                            MISSION
                                        </span>
                                    </h3>
                                    <hr class="title-rule"></hr>
                                </div>
                                <div className='row justify-content-center'>
                                    <h3>
                                        <ul>

                                            <li>
                                                To provide excellent training in language education through open
                                                learning, seminars and workshops;
                                            </li>
                                            <li>
                                                To enable the educators to be expert in the teaching of English to
                                                speakers of other languages; and
                                            </li>
                                            <li>
                                                To lead educators and other professionals embrace quality research
                                                writing and high impact publication and to raise the culture of
                                                research.
                                            </li>
                                            
                                        </ul>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex align-items-center ml-5">
                                <h3 className="pl-5">
                                    <span className="child-title">
                                        Core Values
                                    </span>
                                </h3>
                                <hr class="title-rule"></hr>
                            </div>
                            <div className="row">
                                <div className="col justify-content-center align-items-center">
                                    <h3 style={{textAlign: 'left'}}>
                                        <span style={{color: '#21409a'}}><strong>T</strong></span>rustworthiness
                                        <br></br>
                                        <span style={{color: '#21409a'}}><strong>E</strong></span>xcellence
                                        <br></br>
                                        <span style={{color: '#21409a'}}><strong>S</strong></span>elflessness
                                        <br></br>
                                        <span style={{color: '#21409a'}}><strong>O</strong></span>neness
                                        <br></br>
                                        <span style={{color: '#21409a'}}><strong>L</strong></span>iberality
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-3 mt-5 mb-5">
                        <div className="row">
                            <div className="about-nav" style={{ backgroundColor: 'rgba(33, 64, 154, 0.2)', backdropFilter: 'blur(5px)', maxWidth: '200px', borderRadius: '10px', padding: '10px' }}>
                                <h4 style={{color: '#21409a' }}>ABOUT</h4>
                            </div>
                            <div className="row mt-3">
                                <div style={{ maxWidth: '200px' }}>
                                    <h5 style={{ textAlign: 'left', color: '#21409a' }}>Vision, Mission and Core Values</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div style={{ maxWidth: '200px' }}>
                                    <Link to="/about/background"><h5 style={{ textAlign: 'left', paddingBottom: 'px', textDecoration: 'none !important', color: 'black' }}>Background</h5></Link>
                                </div>
                            </div>
                        </div>



                    </div>
                
                </div>

            </div>
        );
    }
}

export default VMC;