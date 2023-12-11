import React, { useState, useRef } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
 
function ArchiveForm({setShowForm, article}) {
    const {token} = useAuth();
    const volumeValue = [1,2,3,4];
    const [archive, setArchive] = useState({
        ID: {value: article.articleID},
        title: {value: article.title, error: ''},
        org: {value: article.org, error: ''},
        author: {value: '', error: ''},
        volume: {value: '', error: ''},
        abstract: {value: '', error: ''},
        action: 'addToArchive', 
    });

    const inputRef = useRef();
    const [imageFile, setImageFile] = useState(null);

    const handleFileChange = (e) => {
        if (e.length > 0) {
            setImageFile(e[0]);
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
            setImageFile(droppedFiles[0]);
            //console.log("Dropped file:", droppedFiles[0]);
            //console.log("File state:", file);
        }

    }

    const handleDropdownSelect = (selectedValue) => {
        setArchive((prevState) => ({
            ...prevState,
            volume: {value: selectedValue, error: ''}
        }));
    
    }

    const handleCancelButton = () => {
        setShowForm(false);
    }


    const handleInputChange = (event, propName) => {
        const { value } = event.target;

        

        setArchive((prevState) => ({
            ...prevState,
            [propName]: { value, error: '' }
        }));

        
    };

    const formValid = () => {
        let valid = true;

        if(archive.title.value.trim() === '') {
            setArchive((prevState) => ({
                ...prevState,
                title: {...prevState.title, error: 'Input Title to complete this field.'}
            }));
            valid = false;
        }

        if(archive.org.value.trim() === '') {
            setArchive((prevState) => ({
                ...prevState,
                org: {...prevState.org, error: 'Input Institution name to complete this field.'}
            }));
            valid = false;
        }

        if(archive.author.value.trim() === '') {
            setArchive((prevState) => ({
                ...prevState,
                author: {...prevState.author, error: 'Enter Author name.'}
            }));
            valid = false;
        }

        if(archive.abstract.value.trim() === '') {
            setArchive((prevState) => ({
                ...prevState,
                abstract: {...prevState.abstract, error: 'Input Article Abstract.'}
            }));
            valid = false;
        }

        if(archive.volume.value.trim() === '') {
            setArchive((prevState) => ({
                ...prevState,
                volume: {...prevState.volume, error: 'Select Volume Category.'}
            }));
            valid = false;
        }

        if(imageFile === null) {
            valid = false;
        }

        return valid;

    };

    const handleUpload = async (e) => {
        e.preventDefault();

        if(!formValid()) {
            console.log("form not valid");
            return;
        }

        const archiveData = new FormData();
        archiveData.append("articleID", archive.ID.value);
        archiveData.append("title", archive.title.value);
        archiveData.append("org", archive.org.value);
        archiveData.append("author", archive.author.value);
        archiveData.append("volume", archive.volume.value);
        archiveData.append("abstract", archive.abstract.value);
        archiveData.append("action", archive.action);
        archiveData.append("img", imageFile);
        

        try {
            const response = await axios.post("http://localhost:8080/TESOL/controller/Archives.php", archiveData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type' : 'multipart/form-data',
                }
            });
            const { status } = response.data;
            if(status === 1) {
                console.log("successful!");

                try {
                    const deleteResponse = await axios.delete(`http://localhost:8080/TESOL/controller/Articles.php` ,{
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                        data: {
                            articleID: archive.ID.value
                        }
                    });
                    
                    const { status } = deleteResponse.data;
                    if (status === 1) {
                        console.log('Article deleted from Articles table');
                        setShowForm(false);
                    } else {
                        console.log(deleteResponse);
                        
                        console.log('Failed to delete article from Articles table');
                    }

                } catch (deleteError) {
                    console.log("Error deleting article from Articles table: ", deleteError);
                }
            } else {
                console.log("No data response: ", response);
            }

            
        } catch(error) {
            console.log("Error fetching data: ", error);
        }

        
    }

    return ( 
        <div className='loginForm'>
            <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={true}
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Article to Archives.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="articleInfo">
                            <div className="row">
                                <div className="col-md-8">
                                    <Form.Control type="text" placeholder="Article Title" value={archive.title.value} onChange={(e) => handleInputChange(e, "title")} />
                                    <Form.Text className="text-muted" >
                                        {archive.title.error}
                                    </Form.Text>
                                </div>
                                <div className="col-md-4">
                                    <Dropdown onSelect={handleDropdownSelect}>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            {archive.volume.value ? archive.volume.value : "Select Volume"}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {volumeValue.map((value) => (
                                            <Dropdown.Item key={value} eventKey={value}>
                                                {value}
                                            </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Form.Text className="text-muted" >
                                        {archive.volume.error}
                                    </Form.Text>
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="authorInfo">
                            <div className="row">
                                <div className="col-md-7">
                                    <Form.Control type="text" value={archive.author.value} placeholder="Author Name" onChange={(e) => handleInputChange(e, "author")} />
                                    <Form.Text className="text-muted" >
                                        {archive.author.error}
                                    </Form.Text>
                                </div>
                                <div className="col-md-5">
                                    <Form.Control type="text" value={archive.org.value} placeholder="Educational Institution/Organization" onChange={(e) => handleInputChange(e, "org")} />
                                    <Form.Text className="text-muted" >
                                        {archive.org.error}
                                    </Form.Text>
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Abstract">
                            <Form.Label>Article Abstract</Form.Label>
                            <Form.Control type="text" value={archive.abstract.value} placeholder="Description here" onChange={(e) => handleInputChange(e, "abstract")} as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Abstract">
                            <div class="row">
                                <div class="column">
                                    <div className="dropzone"
                                        onDragOver={handleDragOver}
                                        onDrop={handleOnDrop}
                                    >
                                        {!imageFile ? 
                                            (
                                            <>
                                                <h6>Drag and Drop PNG/JPEG Here</h6>
                                                <h6>Or</h6>
                                                <input 
                                                    type="file" 
                                                    onChange={(e) => handleFileChange(e.target.files)}
                                                    hidden
                                                    accept="image/png, image/jpeg"
                                                    ref={inputRef}    
                                                ></input>
                                                <Button variant="secondary" onClick={() => inputRef.current.click()}>Select File</Button>
                                            </>
                                            )
                                             : 
                                            (
                                            <>
                                                <div>
                                                    <h6>{imageFile.name}</h6>
                                                </div>
                                                <div>
                                                    <Button variant="danger" onClick={() => setImageFile(null)}>Cancel</Button>
                                                </div>
                                            </>
                                            )
                                        
                                        
                                        }

                                    </div>

                                </div>
                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleCancelButton}>Cancel</Button>
                    <Button onClick={handleUpload}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}

export default ArchiveForm;