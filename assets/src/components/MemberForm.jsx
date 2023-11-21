import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

function MemberForm({ handleSubmit }){
    
    //one state to check for the error and the data itself
    const [signInputs, setSignInputState] = useState({
        email: {value: '', error: ''},
        password: {value: '', error: 'Note: Must contain Atleast One Lowercase and Uppercase letter, One Number and One Symbol.'},
        name: {value: '', error: ''},
        checkPass: {value: '', error: ''}
    });

    const [logInputs, setLogInputState] = useState({
        userIdentity: {value: '', error: ''},
        password: {value: '', error: ''}
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
          [propName]: {value, error: ''}
        }));
    };


    const resetForm = () => {
        setLogInputState((prevState) => ({
            ...prevState,
            userIdentity: {value: '', error: ''},
            password: {value: '', error: ''},
        }));

        //reset the input field states
        setSignInputState((prevState) => ({
            ...prevState,
            email: {...prevState.email,value: '', error: ''},
            password: {...prevState.password,value: '', error: 'Note: Must contain Atleast One Lowercase and Uppercase letter, One Number and One Symbol.'},
            name: {...prevState.name,value: '', error: ''},
            checkPass: {...prevState.checkPass,value: '', error: ''}
        }));

    }

    const isLogInFormValid = () => {
        let valid = true;

        //check field if empty
        if(logInputs.userIdentity.value.trim() === '') {
            setLogInputState((prevState) => ({
                ...prevState,
                userIdentity: {...prevState.userIdentity, error: 'Please Username/Email field.'}
            }));
            valid = false;
        }
        if(logInputs.password.value.trim() === '') {
            setLogInputState((prevState) => ({
                ...prevState,
                password: {...prevState.email, error: 'Enter your Password.'}
            }));
            valid = false;
        }
        return valid;
    }



    const isSignUpFormValid = () => {
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
                password: {...prevState.password, error: 'Please enter a password.'}
            }));
            valid = false;
        }
        if(signInputs.checkPass.value.trim() === '') {
            setSignInputState((prevState) => ({
                ...prevState,
                checkPass: {...prevState.checkPass, error: 'Please complete this field to check if password matches.'}
            }));
            valid = false;
        }
        return valid;
    }
    
    //create a new map that will take the value key and its value
    const extractData = (input) => {
        const validData = {};
        Object.keys(input).forEach((key) => {
            validData[key] = input[key].value;
        });
        //console.log("value extracted");
        return validData;
        
    }
    
    const handleLogIn = async (event) => {
        event.preventDefault();

        if(!isLogInFormValid()) {
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/TESOL/controller/LogIn.php', JSON.stringify(extractData(logInputs)), 
            // to ensure that data is being passed in the proper json format
            {
                headers: {
                    'Content-Type' : 'application/json',
                }
            });

            /*
            //console.log(signInputs);
            console.log("Login Response:", response.data);
            //this wont print things are asynchronous
            if(response.data.status === 1 ) {
                console.log("response status success");
                console.log("before handle submit");
                await handleSubmit("login", extractData(logInputs));
                console.log("After handlesubmit");
                resetForm();
            } else {
                console.log("Login failed: ", response.data.message);
            }
            */

        } catch (error) {
            console.error("Error logging in:", error);
            resetForm();
        }

        //signal archives page that user has logged in thru JWT token

    }

    const handleSignUp = async (event) => {
        event.preventDefault();

        if(!isSignUpFormValid()) {
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/TESOL/controller/SignUp.php', JSON.stringify(extractData(signInputs)), 
            // to ensure that data is being passed in the proper json format
            {
                headers: {
                    'Content-Type' : 'application/json',
                }
            });
            //console.log(signInputs);
            console.log("Sign up Response:", response.data);

            handleSubmit("signup", extractData(signInputs));

            resetForm();
            

        } catch (error) {
            console.error("Error signing up:", error);
            resetForm();
        }
        /*
        //wont work because setInputState is asynchronous so i tmay not read the state of input after handle submit executes.
        if(handleSubmit("signup", extractData(signInputs))){
            setSignInputState((prevState) => ({
                ...prevState,
                email: {...prevState.email,value: '', error: ''},
                password: {...prevState.password,value: '', error: 'Note: Must contain Atleast One Lowercase and Uppercase letter, One Number and One Symbol.'},
                name: {...prevState.name,value: '', error: ''},
                checkPass: {...prevState.checkPass,value: '', error: ''}
            }));
        };
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
                        Join Our Community. Access the Archive for Free.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Welcome Back!</h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="logFormEmail">
                            <Form.Control type="text" placeholder="Email Address/Username" value={logInputs.userIdentity.value} onChange={(e) => handleLogInputChange(e, "userIdentity")} />
                            <Form.Text className="text-muted" >
                                {logInputs.userIdentity.error}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="logFormPassword">
                            <Form.Control type="password" value={logInputs.password.value} placeholder="Password" onChange={(e) => handleLogInputChange(e, "password")} />
                            <Form.Text className="text-muted" >
                                {logInputs.password.error}
                            </Form.Text>
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
                            <Form.Control type="email" placeholder="Email Address" value={signInputs.email.value} onChange={(e) => handleSignInputChange(e, "email")} />
                            <Form.Text className="text-muted" >
                                {signInputs.email.error}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signformName">
                            <Form.Control type="name" placeholder="Username" value={signInputs.name.value} onChange={(e) => handleSignInputChange(e, "name")}/>
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
                    <Link Link to='/'>
                        <Button>Return to Homepage</Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MemberForm;