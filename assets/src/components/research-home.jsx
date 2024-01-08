import React, { useEffect, useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import CarouselFade from "./carouselLarge";
import volumeData from '../volume1.json';

function ResearchHome() {

    const magazineImg = [

        "/img/magazine/magazine-1.png",
        "/img/magazine/magazine-2.png",
        "/img/magazine/magazine-3.png",

    ]


    const issueNumberFour = volumeData.issues.find(issue => issue.issueNumber === 4);
    const articles = issueNumberFour.articles;

    const renderedIssues = articles.map((item, index) => (
        <div key={index} className="issue">
            <div>
                <h5>{item.title}</h5>
            </div>
            <div>
                <p>{item.author[0].name}</p>
            </div>
            <div>
                <p>{item.author[0].school}</p>
            </div>
        </div>
    ));

    return (
        <div className="researchHome">
            <div className="row" style={{marginLeft: '30px', marginRight: '15px', marginTop: '30px'}} >

                <div className="col-md-8 about-container"style={{marginTop: '10px'}}>

                    <div className="row d-flex">
                        
                        <div className="row about-journal-container" style={{marginTop: '50px'}}>
                            <p>
                                <strong>GUILD OF EDUCATORS IN TESOL INTERNATIONAL INSTITUTE</strong> is a progressive knowledge generating institution that is internationally -recognized for quality English language trainings, seminar, workshops, and conference. It aims to provide relevant, quality, and accessible seminar; 
                                to deliver innovative, and interactive workshops, and, to produce highly competitive and functional trainings for teachers and other professions. GET International Research Journal aims to promote English language education to educators across all disciplines, to provide excellent training in language education through open learning, 
                                seminars and workshops, to enable the educators to be expert in the teaching of English to speakers of other languages and to be a leading center of excellence in the continuing professional development for teachers and other professions locally and internationally.
                            </p>
                            
                        </div>

                        <div className="row about-journal-container">
                            <div className="col d-flex justify-content-center align-items-center">
                                <h5 className="pl-5">
                                    <span className="aboutJournal-title">
                                        Current Issue
                                    </span>
                                </h5>
                                <hr class="title-rule"></hr>
                            </div>
                        </div>
                    


                        <div className="row about-journal-container" style={{marginTop: '30px'}}>
                            {renderedIssues}
                        </div>
                    </div>

                </div>

                <div className="col-md-4  mt-5 mb-5" >
                    <div className="row">
                        <div className="row d-flex justify-content-center">
                            
                            <img src="/img/2023/vol1-series4.png" alt='Volume 1 Series 4' style={{maxWidth: '400px', maxHeight: '500px'}}></img>
                            

                            <div className="row">
                                <div className=" aboutJournal-buttons row mt-3">

                                    <a href="https://docs.google.com/document/d/1CssEEUH0h3tw7iI_GpyTij_MeP-1OmZf/edit" target="_blank" rel="noopener noreferrer">
                                        <div>
                                            <h5>Sample Manuscript</h5>
                                        </div>
                                    </a>

                                </div>
                            </div>

                            <div className="row about-journal-container mt-3">
                                <div className="col d-flex justify-content-center align-items-center mt-5">
                                    <h5 className="pl-5">
                                        <span className="aboutJournal-title">
                                            GET Magazine
                                        </span>
                                    </h5>
                                    <hr class="title-rule"></hr>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col d-flex justify-content-center align-items-center mt-3">
                                    <div className="row">
                                        <div className='col d-flex justify-content-center carousel mt-2 magazine'>
                                            <CarouselFade carImages={magazineImg} />
                                        </div>
                                    </div>
                            
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

                    


        </div>
    );
}

export default ResearchHome;