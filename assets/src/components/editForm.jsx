import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
 
function EditForm({setShowEdit, archive, handleEditUpload }) {
    const volumeValue = [1,2,3,4];
    const {token} = useAuth();
    const [archives, setArchives] = useState({
        ID: {value: archive.archiveID},
        title: {value: archive.title, error: ''},
        org: {value: archive.org, error: ''},
        author: {value: archive.author, error: ''},
        volume: {value: archive.volume, error: ''},
        abstract: {value: archive.abstract, error: ''},
        action: 'editForm',
    });


    const handleDropdownSelect = (selectedValue) => {
        setArchives((prevState) => ({
            ...prevState,
            volume: {value: selectedValue, error: ''}
        }));
    
    }


    const handleCancelButton = () => {
        setShowEdit(false);
    }


    const handleInputChange = (event, propName) => {
        const { value } = event.target;
        setArchives((prevState) => ({
            ...prevState,
            [propName]: { value, error: '' }
        }));

    };

    const formValid = () => {
        let valid = true;

        if(archives.title.value.trim() === '') {
            setArchives((prevState) => ({
                ...prevState,
                title: {...prevState.title, error: 'Input Title to complete this field.'}
            }));
            valid = false;
        }

        if(archives.org.value.trim() === '') {
            setArchives((prevState) => ({
                ...prevState,
                org: {...prevState.org, error: 'Input Institution name to complete this field.'}
            }));
            valid = false;
        }

        if(archives.author.value.trim() === '') {
            setArchives((prevState) => ({
                ...prevState,
                author: {...prevState.author, error: 'Enter Author name.'}
            }));
            valid = false;
        }

        if(archives.abstract.value.trim() === '') {
            setArchives((prevState) => ({
                ...prevState,
                abstract: {...prevState.abstract, error: 'Input Article Abstract.'}
            }));
            valid = false;
        }

        return valid;

    };

    const handleUpload = async (e) => {
        e.preventDefault(); // prevent browser from refreshing the page.

        if(!formValid()) {
            console.log("form not valid");
            return;
        }

        const archiveData = new FormData();
        archiveData.append("archiveID", archives.ID.value);
        archiveData.append("title", archives.title.value);
        archiveData.append("org", archives.org.value);
        archiveData.append("author", archives.author.value);
        archiveData.append("volume", archives.volume.value);
        archiveData.append("abstract", archives.abstract.value);
        archiveData.append("action", archives.action);

        console.log(...archiveData);

        try {
            const response = await axios.post("http://localhost:8080/TESOL/controller/Archives.php", archiveData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type' : 'multipart/form-data',
                }
            });
            console.log(response);
            const { status } = response.data;
            if(status == 1) {
                console.log("update success.");
                handleEditUpload(true);
            }
            else {
                console.log('issue updating');
                
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
                                    <Form.Control type="text" placeholder="Article Title" value={archives.title.value} onChange={(e) => handleInputChange(e, "title")} />
                                    <Form.Text className="text-muted" >
                                        {archives.title.error}
                                    </Form.Text>
                                </div>
                                <div className="col-md-4">
                                    <Dropdown onSelect={handleDropdownSelect}>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            {archives.volume.value ? archives.volume.value : "Select Issue"}
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
                                        {archives.volume.error}
                                    </Form.Text>
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="authorInfo">
                            <div className="row">
                                <div className="col-md-7">
                                    <Form.Control type="text" value={archives.author.value} placeholder="Author Name" onChange={(e) => handleInputChange(e, "author")} />
                                    <Form.Text className="text-muted" >
                                        {archives.author.error}
                                    </Form.Text>
                                </div>
                                <div className="col-md-5">
                                    <Form.Control type="text" value={archives.org.value} placeholder="Educational Institution/Organization" onChange={(e) => handleInputChange(e, "org")} />
                                    <Form.Text className="text-muted" >
                                        {archives.org.error}
                                    </Form.Text>
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Abstract">
                            <Form.Label>Article Abstract</Form.Label>
                            <Form.Control type="text" value={archives.abstract.value} placeholder="Description here" onChange={(e) => handleInputChange(e, "abstract")} as="textarea" rows={3} />
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

export default EditForm;