import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function MemberForm({ handleSubmit }){

    //one state to check for the error and the data itself
    const [signInputs, setSignInputState] = useState({
        email: {value: '', error: ''},
        password: {value: '', error: ''},
        name: {value: '', error: ''},
        checkPass: {value: '', error: ''}
    });

    const [logInputs, setLogInputState] = useState({
        email: {value: '', error: ''},
        password: {value: '', error: ''},
    });


    const handleSignInputChange = (event, propName) => {
        const { value } = event.target;
    
        setSignInputState((prevProps) => ({
          ...prevProps,
          [propName]: {value, error: ''}
        }));
    };
    
    const handleLogInputChange = (event, propName) => {
        const { value } = event.target;
    
        setLogInputState((prevProps) => ({
          ...prevProps,
          [propName]: value
        }));
    };

    const isFormValid = () => {
        let valid = true;

        //check field if empty
        if(signInputs.email.value.trim() === '') {
            setSignInputState((prevState) => ({
                ...prevState,
                email: {...prevState.email, error: 'Please complete email field.'}
            }));
            valid = false;
        }
        if(signInputs.name.value.trim() === '') {
            setSignInputState((prevState) => ({
                ...prevState,
                name: {...prevState.name, error: 'Please input your name.'}
            }));
            valid = false;
        }
        if(signInputs.password.value.trim() === '') {
            setSignInputState((prevState) => ({
                ...prevState,
                password: {...prevState.email, error: 'Please enter a password.'}
            }));
            valid = false;
        }
        if(signInputs.checkPass.value.trim() === '') {
            setSignInputState((prevState) => ({
                ...prevState,
                checkPass: {...prevState.email, error: 'Please complete this field to check if password matches.'}
            }));
            valid = false;
        }
        return valid;
    }
    
    //create a new map that will take the value key and its value
    const extractData = (input) => {
        const validData = {};
        Object.keys(signInputs).forEach((key) => {
            validData[key] = signInputs[key].value;
        });
        return validData;
        console.log("value extracted");
    }


    
    const handleLogIn = (event) => {
        //ano to?
        event.preventDefault();
        //signal the archives page na naglog in yung user
        handleSubmit("login", logInputs);
        //axios.post('http://localhost:3000/TESOL/user/login.php', inputs);

    }

    const handleSignUp = async (event) => {
        event.preventDefault();

        if(!isFormValid()) {
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/TESOL/endpoints/signup.php', JSON.stringify(signInputs), 
            // to ensure that data is being passed in the proper json format
            {
                headers: {
                    'Content-Type' : 'application/json',
                }
            });
            //console.log(signInputs);
            console.log("Response:", response.data);
            

        } catch (error) {
            console.error("Error signing up:", error);
        }
        handleSubmit("signup", extractData());
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
                        Join Our Community. Access the Archive for Free.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Welcome Back!</h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="logFormEmail">
                            <Form.Control type="email" placeholder="Enter email address" value={logInputs.email} onChange={(e) => handleLogInputChange(e, "email")} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="logFormPassword">
                            <Form.Control type="password" value={logInputs.password} placeholder="Password" onChange={(e) => handleLogInputChange(e, "password")} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="logFormBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                    </Form>

                </Modal.Body>

                <Modal.Body>
                    <h5>Sign up for a New Account</h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="signformEmail">
                            <Form.Control type="email" placeholder="Enter email" value={signInputs.email.value} onChange={(e) => handleSignInputChange(e, "email")} />
                            <Form.Text className="text-muted">
                                {signInputs.email.error}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signformName">
                            <Form.Control type="name" placeholder="Enter your name" value={signInputs.name.value} onChange={(e) => handleSignInputChange(e, "name")}/>
                            <Form.Text className="text-muted">
                                {signInputs.name.error}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signFormPassword">
                            <Form.Control type="password" placeholder="Password" value={signInputs.password.value} onChange={(e) => handleSignInputChange(e, "password")} />
                            <Form.Text className="text-muted">
                                {signInputs.password.error}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signFormConfirmPassword">
                            <Form.Control type="password" placeholder="Confirm your Password" value={signInputs.checkPass.value} onChange={(e) => handleSignInputChange(e, "checkPass")} />
                            <Form.Text className="text-muted">
                                {signInputs.checkPass.error}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="signFormBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleLogIn}>Log In</Button>
                    <Button onClick={handleSignUp}>Sign Up</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MemberForm;