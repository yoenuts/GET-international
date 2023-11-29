import React, {useRef, useState} from "react";
import '../userStyle.css';
import { useAuth } from "../Context/AuthContext";
import axios from "axios";

function ArticleForm() {
    const {token, getUserID} = useAuth();
    const [articleFile, setArticleFile] = useState(null);
    const inputRef = useRef(); //reference the actual input in the DOM
    //the input field is actually hidden and clicking on the button triggers it.
    //useRef lets you change the current without rerendering the other components.
    const [formData, setFormData] = useState({
        userID: {value: ''},
        title: {value: '', error: ''},
        org: {value: '', error: ''},

    })

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
            //console.log("Dropped file:", droppedFiles[0]);
            //console.log("File state:", file);
        }

    }

    const formValid = () => {

    }

    const handleUpload = () => {
        const articleData = new FormData();
        articleData.append("userID", getUserID());
        articleData.append("title", formData.title.value);
        articleData.append("file", articleFile);
        articleData.append("org", formData.org.value);
        
        console.log([...articleData])
      
        axios.post("http://localhost:8080/TESOL/controller/submitArticle.php", articleData, {
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'multipart/form-data',
            }
        }).then((res) => {
            alert("File Upload success");
        }).catch((err) => alert("File Upload Error"));
    };


    return(
        <div className="archiveForm">
            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div class="article-container">
                        <form>
                            <div class="row">
                                <div class="column">
                                    <label for="title">Title</label>
                                    <input type="text" id="title" value={formData.title.value} placeholder="Title here"></input>
                                </div>
                                <div class="column">
                                    <label for="org">Institution/Organization</label>
                                    <input type="text" id="org" value={formData.org.value} placeholder="Institute/Organization"></input>
                                </div>
                            </div>
                            <div class="row">
                                <div class="column">
                                    <div className="dropzone"
                                        onDragOver={handleDragOver}
                                        onDrop={handleOnDrop}
                                    >
                                        {!articleFile ? 
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
                            <button onClick={handleUpload}>Submit</button>
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