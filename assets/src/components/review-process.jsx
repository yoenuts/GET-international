import React from "react";
import '../research.css';

function Process() {

    return(
        <div className="col-md-8 about-container">

            <div className="row d-flex" style={{marginRight: '20px'}}>
                <div className="row">
                    <div className="col d-flex align-items-center mt-5">
                        <h3 className="pl-5">
                            <span className="aboutJournal-title">
                                Review Process
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
                        Upon receipt of the article, the journal will send an acknowledgement receipt to the author’s via e-mail. 
                        It is very important that the author’s download and follow the <a href="https://docs.google.com/document/d/1CssEEUH0h3tw7iI_GpyTij_MeP-1OmZf/edit">Sample Manuscript</a>. Submitted articles that do not follow the journal’s prescribed format using its sample manuscript shall be returned to the author’s. 

                    </p>

                    <p>
                        For the authors who have followed the journal’s prescribed format, the formal review process shall commence. The article will be reviewed by the assigned Associate Editor, undergo a thorough plagiarism check, and will 
                        be assigned to two peer reviewers who must be aligned/expert on the topic being reviewed. 
                    </p>

                    <p>
                        The journal follows a double-blind review process, where both the reviewer and the author remain anonymous with each other throughout the process. Authors must remove all identifying features such as author(s) affiliations from the article, ensuring that Author’s identity is not revealed.
                    </p>

                    <p>
                        The two peer reviewers have <b>2 (two) weeks</b> to send their separate reviews to the Editor-in-Chief (EIC). Once the reviews are available <b>(Publish unaltered / Accept after minor revisions are done / Accept after major revisions are done)</b>, the EIC shall forward them to the author/s for appropriate action/compliance. 
                        The author/s also have two weeks to work on the revisions. 
                    </p>

                    <p>
                        For split decision when one peer reviewer has a decision of<b>“Reject – that the article submitted cannot be considered for publication”</b> while the other peer reviewer has a decision of <b>“Publish unaltered”</b>, or <b>“Accept after minor revisions are done”</b>, or <b>“Accept after major revisions are done”</b>, the EIC shall assign another peer reviewer (3rd peer reviewer) before conveying
                        the final decision to the author of the journal. Author/s have to be informed of a split decision. 
                    </p>



                    
                </div>
            






            </div>


        </div>

    );
}

export default Process;