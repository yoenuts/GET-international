import React from "react";
import '../research.css';

function Policies() {

    return(
        <div className="col-md-8 about-container">

            <div className="row d-flex" style={{marginRight: '20px'}}>
                <div className="row">
                    <div className="col d-flex align-items-center mt-5">
                        <h3 className="pl-5">
                            <span className="aboutJournal-title">
                                Submission Policy
                            </span>
                        </h3>
                        <hr class="title-rule"></hr>
                    </div>
                </div>
                
                <div className="row about-journal-container" style={{marginTop: '30px'}}>
                    <p>
                        Papers submitted to GET International Research Journal must contain original material. The submitted paper, 
                        or any translation of it, must neither be published, nor be submitted for publication elsewhere.
                        Violations of these rules will normally result in an immediate rejection of the submission without further review.
                    </p>

                    <p>
                        Contributions should be written in English and include a 250-300 words abstract. GET International Research Journal usually 
                        welcome the following types of contributions:
                    </p>

                    <p>
                        <ul>
                            <li> Original research articles </li>
                            <li> Review articles, providing a comprehensive review on a scientific topic</li>
                        </ul>
                    </p>
                    
                </div>
            

                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <h3 className="pl-5">
                            <span className="aboutJournal-title">
                                Changes to Authorship
                            </span>
                        </h3>
                        <hr class="title-rule"></hr>
                    </div>
                </div>

                <div className="row about-journal-container" style={{marginTop: '30px'}}>
                    
                    <p>
                        Authors retain copyright licensed. Authors are permitted and encouraged to post their work online (e.g., in institutional repositories or on their website) 
                        prior to and during the submission process, as it can lead to productive exchanges, as well as earlier and greater citation of published work. In other words,
                        authors can archive pre-print (submitted version), post-print (accepted version), and publisher’s version/PDF.
                    </p>

                </div>

                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <h3 className="pl-5">
                            <span className="aboutJournal-title">
                                Conflict of Interest
                            </span>
                        </h3>
                        <hr class="title-rule"></hr>
                    </div>
                </div>

                <div className="row about-journal-container" style={{marginTop: '30px'}}>
                    
                    <p>
                        All authors are requested to disclose any actual or potential conflict of interest including any financial, personal 
                        or other relationships with other people or organizations that could inappropriately influence, or be perceived to influence, their work.
                    </p>

                </div>

                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <h3 className="pl-5">
                            <span className="aboutJournal-title">
                                Article Retraction
                            </span>
                        </h3>
                        <hr class="title-rule"></hr>
                    </div>
                </div>

                <div className="row about-journal-container" style={{marginTop: '30px'}}>
                    
                    <p>
                        This involves infringements of professional ethical codes, such as multiple submission, bogus claims of authorship, 
                        plagiarism, fraudulent use of data or the like.
                    </p>

                    <p>
                        This is only used for Articles that has finished the editorial and review process and or has representation of early versions of articles and sometimes contain errors or may have been accidentally submitted twice. 
                        An article withdrawal fee will be charged amounting to <strong>PHP 6000 (Six thousand pesos) [USD 120] </strong>.
                    </p>

                </div>

                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <h3 className="pl-5">
                            <span className="aboutJournal-title">
                                Article removal: legal limitations
                            </span>
                        </h3>
                        <hr class="title-rule"></hr>
                    </div>
                </div>

                <div className="row about-journal-container" style={{marginTop: '30px'}}>
                    
                    <p>
                        In an extremely limited number of cases, it may be necessary to remove an article from the online database. This will only occur where the article is clearly defamatory, or infringes others’ legal rights, or where the article is, 
                        or the journal has good reason to expect it will be, the subject of a 
                        court order, or where the article, if acted upon, might pose a serious health risk.
                    </p>

                </div>
            </div>


        </div>

    );
}

export default Policies;