import React, {useRef, useState} from "react";
import '../userStyle.css';



function ArticleForm() {
    const [file, setFile] = useState(null);
    const inputRef = useRef(); //reference the actual input in the DOM
    //the input field is actually hidden and clicking on the button triggers it.
    //useRef lets you change the current without rerendering the other components.

    const handleFileChange = (selectedFiles) => {
        if (selectedFiles.length > 0) {
            setFile(selectedFiles[0]);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();

    }
    
    const handleOnDrop = (e) => {
        e.preventDefault();
        //console.log(event);
        //one file only

        // Get the dropped files or selected files
        const droppedFiles = e.dataTransfer.files || e.target.files;

        // Handle only one file
        if (droppedFiles.length > 0) {
            setFile(droppedFiles[0]);
            console.log("Dropped file:", droppedFiles[0]);
            console.log("File state:", file);
        }

    }


    return(
        <div className="archiveForm">
            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div class="article-container">
                        <form>
                            <div class="row">
                                <div class="column">
                                    <label for="title">Title</label>
                                    <input type="text" id="title" placeholder="Title here"></input>
                                </div>
                                <div class="column">
                                    <label for="org">Institution/Organization</label>
                                    <input type="text" id="org" placeholder="Institute/Organization"></input>
                                </div>
                            </div>
                            <div class="row">
                                <div class="column">
                                    <label for="subject">Subject</label>
                                    <input type="text" id="subject" placeholder="Your subject here"></input>
                                </div>
                                <div class="column">
                                    <label for="contact">Contact Number</label>
                                    <input type="tel" id="contact" placeholder="Your phone number here"></input>
                                </div>
                            </div>
                            <div class="row">
                                <div class="column">
                                    <div className="dropzone"
                                        onDragOver={handleDragOver}
                                        onDrop={handleOnDrop}
                                    >
                                        {!file ? 
                                            (
                                            <>
                                                <h6>Drag and Drop PDF Here</h6>
                                                <h6>Or</h6>
                                                <input 
                                                    type="file" 
                                                    onChange={(e) => handleFileChange(e.target.files)}
                                                    hidden
                                                    accept="application/pdf"
                                                    ref={inputRef}    
                                                ></input>
                                                <button type="button" onClick={() => inputRef.current.click()}>Select File</button>
                                            </>
                                            )
                                            : 
                                            (
                                            <>
                                                <div>
                                                    <h6>{file.name}</h6>
                                                </div>
                                                <div>
                                                    <button onClick={() => setFile(null)}>Cancel</button>
                                                </div>
                                            </>
                                            )
                                        
                                        
                                        }

                                    </div>

                                </div>
                                
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>  
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <h1>Submit An Article</h1>
                    <p>Complete all fields to submit form.</p>
                </div>
             
            </div>

        </div>
    );
}

export default ArticleForm;