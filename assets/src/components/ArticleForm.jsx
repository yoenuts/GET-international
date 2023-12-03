import React, {useRef, useState} from "react";
import '../userStyle.css';
import { useAuth } from "../Context/AuthContext";
import axios from "axios";

function ArticleForm() {
    const {token, getUserId} = useAuth();
    const [articleFile, setArticleFile] = useState(null);
    const inputRef = useRef(); //reference the actual input in the DOM
    //the input field is actually hidden and clicking on the button triggers it.
    //useRef lets you change the current without rerendering the other components.
    const [formData, setFormData] = useState({
        title: {value: '', error: ''},
        org: {value: '', error: ''},

    })

    const handleInputChange = (event, propName) => {
        const { value } = event.target;
    
        setFormData((prevState) => ({
          ...prevState,
          [propName]: {value, error: ''}
        }));
    };

    const resetForm = () => {
        setFormData((prevState) => ({
            ...prevState,
            title: {value: '', error: ''},
            org: {value: '', error: ''},
        }));

        setArticleFile(null);
    }

    const handleFileChange = (selectedFiles) => {
        if (selectedFiles.length > 0) {
            setArticleFile(selectedFiles[0]);
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
            setArticleFile(droppedFiles[0]);
            //console.log("Dropped file:", droppedFiles[0]);
            //console.log("File state:", file);
        }

    }

    const formValid = () => {
        let valid = true;

        if(formData.title.value.trim() === '') {
            setFormData((prevState) => ({
                ...prevState,
                title: {...prevState.title, error: 'Input Title to complete this field.'}
            }));
            valid = false;
        }
        if(formData.org.value.trim() === '') {
            setFormData((prevState) => ({
                ...prevState,
                title: {...prevState.org, error: 'Input Institution name to complete this field.'}
            }));
            valid = false;
        }

        
        return valid;

    }


    const handleUpload = async (e) => {
        e.preventDefault();
        //ok lol now i know what this is for

        if(!formValid) {
            return;
        }

        //console.log('upload ran');
        const articleData = new FormData();
        articleData.append("userID", getUserId());
        articleData.append("title", formData.title.value);
        articleData.append("file", articleFile);
        articleData.append("org", formData.org.value);
        
        try {
            const response =  await axios.post("http://localhost:8080/TESOL/controller/Articles.php", articleData, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            });

            console.log(response.data);
            resetForm();

        } catch  (error) {
            console.log("error signing up. ", error);
        }

    }

    const uploadSuccess = () => {
        return( 
            <h6>File was uploaded successfully.</h6>
        );
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
                                    <input type="text" id="title" value={formData.title.value} onChange={(e) => handleInputChange(e, 'title')} placeholder="Title here"></input>
                                    <p className="error-message">{formData.title.error}</p>
                                </div>
                                <div class="column">
                                    <label for="org">Institution/Organization</label>
                                    <input type="text" id="org" value={formData.org.value} onChange={(e) => handleInputChange(e, 'org')} placeholder="Institute/Organization"></input>
                                    <p className="error-message">{formData.org.error}</p>
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
                                                    <h6>{articleFile.name}</h6>
                                                </div>
                                                <div>
                                                    <button onClick={() => setArticleFile(null)}>Cancel</button>
                                                </div>
                                            </>
                                            )
                                        
                                        
                                        }

                                    </div>

                                </div>
                                
                            </div>
                            {articleFile ? <button onClick={(e) => handleUpload(e)}>Submit</button> : null}
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