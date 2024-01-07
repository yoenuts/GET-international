import React from "react";
import '../research.css';
import { Link, useParams, useLocation } from "react-router-dom";
import Policies from '../components/Policies';
import ResearchHeader from "./research-header";
import Guidelines from "../components/guidelines";
import Process from "../components/review-process";
import EditorialBoard from "../components/editorial-board";

function aboutJournal() {

    const location = useLocation();
    const { page } = useParams();
    let content;

    switch(page) {
        case 'policies':
            content =  <Policies />;
            break;
        case 'guidelines':
            content = <Guidelines />
            break;
        case 'process':
            content = <Process />
            break;
        case 'editorialBoard':
            content = <EditorialBoard />
            break;
        default:
            content = 
                <div className="col-md-8 about-container">

                    <div className="row d-flex" style={{marginRight: '20px'}}>
                        <div className="row">
                            <div className="col d-flex align-items-center mt-5">
                                <h3 className="pl-5">
                                    <span className="aboutJournal-title">
                                        About GET Journal
                                    </span>
                                </h3>
                                <hr class="title-rule"></hr>
                            </div>
                        </div>
                        
                        <div className="row about-journal-container" style={{marginTop: '30px'}}>
                            <p>
                                GUILD OF EDUCATORS IN TESOL INTERNATIONAL INSTITUTE is a progressive knowledge generating institution that is internationally -recognized for quality English language trainings, seminar, workshops, and conference. It aims to provide relevant, quality, and accessible seminar; 
                                to deliver innovative, and interactive workshops, and, to produce highly competitive and functional trainings for teachers and other professions. GET International Research Journal aims to promote English language education to educators across all disciplines, to provide excellent training in language education through open learning, 
                                seminars and workshops, to enable the educators to be expert in the teaching of English to speakers of other languages and to be a leading center of excellence in the continuing professional development for teachers and other professions locally and internationally.

                            </p>
                            
                        </div>
                    

                        <div className="row">
                            <div className="col d-flex justify-content-center align-items-center">
                                <h3 className="pl-5">
                                    <span className="aboutJournal-title">
                                        Aims and Scope
                                    </span>
                                </h3>
                                <hr class="title-rule"></hr>
                            </div>
                        </div>

                        <div className="row about-journal-container" style={{marginTop: '30px'}}>
                            
                            <p>
                                The Guild of Educators in TESOL International (GET International) is a scholarly, open-access, international, quarterly, 
                                peer-reviewed, online journal that publishes research articles that contribute to human and societal development through 
                                excellent academic and scientific findings. GET International’s interdisciplinary nature adheres to the global challenge 
                                for all educators and industry practitioners to value the integration of various disciplines in their studies in order to 
                                arrive at a holistic understanding of a phenomenon or an inquiry. Thus, while the journal accepts articles on knowledge from different disciplines (multidisciplinary), 
                                it gives high regard to studies that deal with knowledge within and across disciplines.
                            </p>

                        
                            <p>
                                GET International aims to serve as an instrument and an avenue for all educators and industry practitioners to disseminate the findings of their studies and be part of the
                                global challenge for everyone to embrace the culture of research.
                            </p>

                        </div>
                    </div>

                </div>
            break;
    }

    return(
        <div className="aboutJournal" style={{marginBottom: '70px'}}>
            {!renderNavHeader() && <ResearchHeader />}
            <div className="row" style={{marginLeft: '20px', marginRight: '15px'}} >
                <div className="col-md-4  mt-5 mb-5" >
                    <div className="row">
                        <div className="row d-flex justify-content-center">
                            
                            <img src="/img/2023/vol1-series4.png" alt='Volume 1 Series 4' style={{maxWidth: '400px', maxHeight: '500px'}}></img>
                            

                            <div className="row">
                                <div className=" aboutJournal-buttons row mt-3">

                                    <Link Link to='/'>
                                        
                                        <div style={{backgroundColor: '#21409a'}}>
                                            <h4 style={{color: 'white'}}>Submit An Article</h4>
                                        </div>
                                        
                                    </Link>


                                   <Link to='/research/aboutJournal'>
                                        
                                        <div>
                                            <h5>About</h5>
                                        </div>
                                        
                                    </Link>
                                    <Link to="/research/aboutJournal/policies">
                                        
                                        <div>
                                            <h5>Publication Policies and Ethics</h5>
                                        </div>
                                        
                                    </Link>

                                    
                                    <Link to='/research/aboutJournal/guidelines'>
                                        <div>
                                            <h5>Submission Guidelines</h5>
                                        </div>
                                        
                                    </Link>
                                    
                                    <Link Link to='/research/aboutJournal/process'>
                                        <div>
                                            <h5>Review Process</h5>
                                        </div>

                                    </Link>

                                    <Link Link to='/research/aboutJournal/editorialBoard'>
                                        
                                        <div>
                                            <h5>Editorial Board</h5>
                                        </div>
                                        
                                    </Link>

                                    <a href="https://docs.google.com/document/d/1CssEEUH0h3tw7iI_GpyTij_MeP-1OmZf/edit" target="_blank" rel="noopener noreferrer">
                                        <div>
                                            <h5>Sample Manuscript</h5>
                                        </div>
                                    </a>



                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {content}

                    
            </div>

        </div>

    );
    
    function renderNavHeader() {
        return location.pathname === '/research/aboutJournal';
    }

}

export default aboutJournal;