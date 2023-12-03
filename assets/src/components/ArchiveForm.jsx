import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

function ArchiveForm({setShowForm}) {
    const volumeValue = [1,2,3];
    const [archive, setArchive] = useState({
        title: {value: '', error: ''},
        org: {value: '', error: ''},
        author: {value: '', error: ''},
        volume: {value: '', error: ''},
        issue: {value: '', error: ''},
        abstract: {value: '', error: ''},
        date: {value: '', error: ''},
        img: {value: '', error: ''},
    })

    const handleDropdownSelect = (selectedValue) => {
        setArchive((prevState) => ({
            ...prevState,
            [volume]: {value: selectedValue, error: ''}
        }));
    
    }

    const handleCancelButton = () => {
        setShowForm(false);
    }

    const handleInputChange = (event, propName) => {
        const { value } = event.target;
    
        setArchive((prevState) => ({
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

    }

    const formValid = () => {
        let valid = true;

        if(archive.title.value.trim() === '') {
            setFormData((prevState) => ({
                ...prevState,
                title: {...prevState.title, error: 'Input Title to complete this field.'}
            }));
            valid = false;
        }
        if(archive.org.value.trim() === '') {
            setFormData((prevState) => ({
                ...prevState,
                title: {...prevState.org, error: 'Input Institution name to complete this field.'}
            }));
            valid = false;
        }
        if(archive.author.value.trim() === '') {
            setFormData((prevState) => ({
                ...prevState,
                title: {...prevState.org, error: 'Enter Author name.'}
            }));
            valid = false;
        }
        if(archive.abstract.value.trim() === '') {
            setFormData((prevState) => ({
                ...prevState,
                title: {...prevState.org, error: 'Input Article Abstract.'}
            }));
            valid = false;
        }

        
        return valid;

    }

    const fetchArticleData = async (e) => {
        try {
            const response = await axios.get("http://localhost:8080/TESOL/controller/Articles.php", {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            const { status, data } = response.data;
            if(status === 1) {
                setArchive(data);
            }
            else {
                console.log('no response: ');
            }
            
        } catch(error) {
            console.log("Error fetching data: ", error);
        }
    }

    const handleUpload = async (e) => {
        e.preventDefault();
        //ok lol now i know what this is for

        if(!formValid) {
            return;
        }

        resetForm();

        /*
        //console.log('upload ran');
        const articleData = new FormData();
        articleData.append("userID", getUserId());
        articleData.append("title", formData.title.value);
        articleData.append("org", formData.org.value);
        
        try {
            const response =  await axios.post("http://localhost:8080/TESOL/controller/Archives.php", articleData, 
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
                        <Form.Group className="mb-3" controlId="articleTitle">
                            <Form.Control type="text" placeholder="Article Title" value={archive.title.value} onChange={(e) => handleInputChange(e, "title")} />
                            <Form.Text className="text-muted" >
                                {archive.title.error}
                            </Form.Text>
                            <Dropdown onSelect={handleDropdownSelect}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Select Volume
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
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="authorName">
                            <Form.Control type="text" value={archive.author.value} placeholder="Author Name" onChange={(e) => handleInputChange(e, "author")} />
                            <Form.Text className="text-muted" >
                                {archive.author.error}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Abstract">
                            <Form.Label>Article Abstract</Form.Label>
                            <Form.Control as="textarea" rows={3} />
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