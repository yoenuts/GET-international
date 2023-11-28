import React, {useRef, useState} from "react";
import '../userStyle.css';



function ArticleForm() {
    const [file, setFile] = useState(null);
    const inputRef = useRef(); //reference the actual input in the DOM
    //the input field is actually hidden and clicking on the button triggers it.
    //useRef lets you change the current without rerendering the other components.

    const handleDragOver = (event) => {
        event.preventDefault();

    }
    
    const handleOnDrop = (event) => {
        event.preventDefault();
        //console.log(event);

        setFile(event.dataTransfer.file);
    }

    if(file) return (
        <div className="upload">
            <ul>
                {Array.from(file).map((file,idx) => <li key={idx}>{file.name}</li>)}
            </ul>
            <div className="actions">
                <button onClick={() => setFile(null)}>Cancel</button>
            </div>
        </div>
    )

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
                                    {!file && (
                                        <div className="dropzone"
                                            onDragOver={handleDragOver}
                                            onDrop={handleOnDrop}
                                        >
                                            <h6>Drag and Drop PDF Here</h6>
                                            <h6>Or</h6>
                                            <input 
                                                type="file" 
                                                onChange={(e) => setFile(event.target.file)}
                                                hidden
                                                ref={inputRef}    
                                            ></input>
                                            <button onClick={() => inputRef.current.click()}>Select Files</button>
                                        </div>
                                    )}
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