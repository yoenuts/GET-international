import React, { useState } from "react";
import '../App.css';

function Contact () {

    const [formData, setFormData] = useState({
        name: {value: '', error: ''},
        email: {value: '', error: ''},
        subject: {value: '', error: ''},
        message: {value: '', error: ''},

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
            name: {value: '', error: ''},
            email: {value: '', error: ''},
            subject: {value: '', error: ''},
            message: {value: '', error: ''},
        }));

    }


    const formValid = () => {
        let valid = true;

        if(formData.name.value.trim() === '') {
            setFormData((prevState) => ({
                ...prevState,
                name: {...prevState.title, error: 'Input Name to complete this field.'}
            }));
            valid = false;
        }
        if(formData.email.value.trim() === '') {
            setFormData((prevState) => ({
                ...prevState,
                email: {...prevState.org, error: 'Input Email to complete this field.'}
            }));
            valid = false;
        }
        if(formData.subject.value.trim() === '') {
            setFormData((prevState) => ({
                ...prevState,
                subject: {...prevState.title, error: 'Input Subject to complete this field.'}
            }));
            valid = false;
        }
        if(formData.message.value.trim() === '') {
            setFormData((prevState) => ({
                ...prevState,
                message: {...prevState.org, error: 'Input Message to complete this field.'}
            }));
            valid = false;
        }

        
        return valid;

    }


    const handleUpload = async (e) => {
        e.preventDefault();
        //ok lol now i know what this is for

        if(!formValid()) {
            console.log("error");
            return;
        }
        /*
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
        */

    }

    const uploadSuccess = () => {
        return( 
            <h6>File was uploaded successfully.</h6>
        );
    }



    return(
        <div className="Contact">
            <div className="research-top-div">
                <div className="row">
                    <div className="col d-flex">
                        <div className="col d-flex justify-content-center">
                            <img className="research-logo" src="/img/GET-logo.png" alt="GET-logo" />
                        </div>
                    </div>
                    <div className="col d-flex align-items-center">
                        <div className="title-header">
                            <h1>Guild of Educators in TESOL International</h1>
                            <h3><i>Your gateway to endless opportunities</i></h3>
                            <ul>
                                <li> 
                                    <strong>ISSN:</strong> <a href="https://portal.issn.org/resource/ISSN/2984-7176">2984-7176 (Print)</a> | <a href="https://portal.issn.org/resource/ISSN/2984-7184">2984-7184 (Online)</a>
                                </li>
                                <li> 
                                    <strong>Publisher:</strong> Guild of Educators in TESOL International Institute – Graduate School for Teachers Inc.
                                </li>
                                <li> 
                                    <strong>Publication Format:</strong> Online
                                </li>
                                <li> 
                                    <strong>Frequency:</strong> 4 issues per year (February, May, August, and November.)
                                </li>
                                <li> 
                                    <strong>Language:</strong> English | Filipino
                                </li>

                                <li> 
                                    <strong>Established:</strong> 2023
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>  

            <div className="archiveForm">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <div class="article-container">
                            <form>
                                <div class="row">
                                    <div class="column">
                                        <label for="name">Name</label>
                                        <input type="text" id="name" value={formData.name.value} onChange={(e) => handleInputChange(e, 'name')} placeholder="Name"></input>
                                        <p className="error-message">{formData.name.error}</p>
                                    </div>
                                    <div class="column">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" value={formData.email.value} onChange={(e) => handleInputChange(e, 'email')} placeholder="Email"></input>
                                        <p className="error-message">{formData.email.error}</p>
                                    </div>
                                    <div class="column">
                                        <label for="subject">Subject</label>
                                        <input type="text" id="subject" value={formData.subject.value} onChange={(e) => handleInputChange(e, 'subject')} placeholder="Subject"></input>
                                        <p className="error-message">{formData.subject.error}</p>
                                    </div>
                                    <div class="column">
                                        <label for="message">Message</label>
                                        <input type="text" id="message" value={formData.message.value} onChange={(e) => handleInputChange(e, 'message')} placeholder="Message here"></input>
                                        <p className="error-message">{formData.message.error}</p>
                                    </div>
                                </div>
                                <button onClick={(e) => handleUpload(e)}>Submit</button>
                            </form>
                        </div>  
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <h1>Submit An Article</h1>
                        <p>Complete all fields to submit form.</p>
                    </div>
                </div>
            </div>
            
        </div>

    );

}

export default Contact;