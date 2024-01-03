import React from "react";
import '../App.css';


class About extends React.Component {

    render(){
        return(
            <div className="About">
                <div className="about-container mt-5">
                    <h1>Background</h1>
                    <hr></hr>
                    <div className='about-container d-flex justify-content-center align-items-center'>
                        <div className="background-container mx-5">
                            <p>Guild of Educators in TESOL International was established in 2017 with the aim of providing high-quality training and collaboration opportunities for teachers in local schools. From its inception, GET International has been dedicated to improving the teaching standards and practices in the education sector.</p>
                            <p>Initially, the organization focused on conducting training programs for teachers in various private schools locally and internationally, helping them enhance their skills and knowledge in pedagogy and curriculum development. Through these training initiatives, GET International forged strong collaborations with several private schools, working closely with them to implement effective teaching methodologies.</p>
                            <span className="training2017"><img src="/img/training-2017.jpg" alt="Training 2017"></img></span>
                            <p>Recognizing the importance of language education, GET International opened a TESOL (Teaching English to Speakers of Other Languages) diploma program. This program aims to equip educators with the necessary expertise to teach English as a second language. Upon completion of the TESOL diploma, graduates were deployed to partner schools abroad, enabling them to gain valuable international teaching experience.</p>
                            <span className="feb2023"><img src="/img/feb-2023.jpg" alt="February 2023 Call for Papers"></img></span>
                            <p>In <strong>February 2023</strong>, GET International expanded its horizons by venturing into research publication across discipline. This marked a significant milestone for the organization, as it demonstrated a commitment to advancing knowledge and contributing to the academic community. The research publications covered a wide range of educational topics and showcased the expertise and insights of GET International’s team.</p>
                            <p>Furthermore, GET International initiated multidisciplinary research conferences, offering a platform for scholars and researchers to share their findings and engage in fruitful discussions. These conferences were conducted in a hybrid mode, combining in-person and virtual participation to ensure wider accessibility.</p>
                            <p>Building on its growing reputation and research endeavors, GET International established a memorandum of understanding (MoU) with UDM (University of District-Metro) for a research Writeshop. This collaboration aimed to foster an environment of collaborative learning and knowledge exchange, benefiting both institutions and their stakeholders.</p>
                            <p>GET International is continuously seeking new collaborations with various stakeholders in the education sector, including schools, universities, and other organizations. These partnerships aim to strengthen its programs and initiatives, enrich the learning experiences of teachers and students, and contribute to the overall improvement of education worldwide.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default About;