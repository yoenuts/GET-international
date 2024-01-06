import React from "react";
import '../App.css';
import { Link } from "react-router-dom";


class About extends React.Component {

    render(){
        return(
            <div className="About">
                <div className="row">
                    <div className="col-md-9 about-container mt-5">
                        <h1 style={{color: '#2b69af'}}>Background</h1>
                        <hr></hr>
                        <div className='about-container d-flex justify-content-center align-items-center'>
                            <div className="background-container mx-5">
                                <p>Guild of Educators in TESOL International was established in 2017 with the aim of providing high-quality training and collaboration opportunities for teachers in local schools. From its inception, GET International has been dedicated to improving the teaching standards and practices in the education sector.</p>
                                <p>Initially, the organization focused on conducting training programs for teachers in various private schools locally and internationally, helping them enhance their skills and knowledge in pedagogy and curriculum development. Through these training initiatives, GET International forged strong collaborations with several private schools, working closely with them to implement effective teaching methodologies.</p>
                                
                                <div className="training2017 mt-4 mb-4"><img src="/img/training-2017.jpg" alt="Training 2017"></img></div>

                                <p>Recognizing the importance of language education, GET International opened a TESOL (Teaching English to Speakers of Other Languages) diploma program. This program aims to equip educators with the necessary expertise to teach English as a second language. Upon completion of the TESOL diploma, graduates were deployed to partner schools abroad, enabling them to gain valuable international teaching experience.</p>
                                
                                <div>
                                    <h4>The Quantum Leap </h4>
                                </div>

                                <p className="mt-4">In <strong>February 2023</strong>, GET International expanded its horizons by venturing into research publication across discipline. This marked a significant milestone for the organization, as it demonstrated a commitment to advancing knowledge and contributing to the academic community. The research publications covered a wide range of educational topics and showcased the expertise and insights of GET International’s team.</p>
                                <div className="feb2023"><img src="/img/feb-2023.jpg" alt="February 2023 Call for Papers"></img></div>
                                <p className="mt-3">Furthermore, GET International initiated multidisciplinary research conferences, offering a platform for scholars and researchers to share their findings and engage in fruitful discussions. These conferences were conducted in a hybrid mode, combining in-person and virtual participation to ensure wider accessibility.</p>

                                <h4>Advancing Education Through Partnerships</h4>
                                <p>Building on its growing reputation and research endeavors, GET International established a memorandum of understanding (MoU) with UDM (University of District-Metro) for a research Writeshop. This collaboration aimed to foster an environment of collaborative learning and knowledge exchange, benefiting both institutions and their stakeholders.</p>
                                <p>GET International is continuously seeking new collaborations with various stakeholders in the education sector, including schools, universities, and other organizations. These partnerships aim to strengthen its programs and initiatives, enrich the learning experiences of teachers and students, and contribute to the overall improvement of education worldwide.</p>
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
                                    <Link to="/about/vmc"><h5 style={{ textAlign: 'left', paddingBottom: 'px', textDecoration: 'none !important', color: 'black' }}>Vision, Mission and Core Values</h5></Link>
                                </div>
                            </div>
                            <div className="row">
                                <div style={{ maxWidth: '200px' }}>
                                    <h5 style={{ textAlign: 'left', color: '#21409a' }}>Background</h5>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                
            </div>
        );
    }
}

export default About;