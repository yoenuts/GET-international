import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function MemberForm({ handleSubmit }){
    const [signInputs, setSignInputState] = useState({
        email: "",
        password: "",
        name: "",
        checkPass: ""
    });

    const [logInputs, setLogInputState] = useState({
        email: "",
        password: "",
    });


    const handleSignInputChange = (event, propName) => {
        const { value } = event.target;
    
        setSignInputState((prevProps) => ({
          ...prevProps,
          [propName]: value
        }));
    };
    
    const handleLogInputChange = (event, propName) => {
        const { value } = event.target;
    
        setLogInputState((prevProps) => ({
          ...prevProps,
          [propName]: value
        }));
    };
    
    const handleLogIn = (event) => {
        //ano to?
        event.preventDefault();
        //signal the archives page na naglog in yung user
        handleSubmit("login", logInputs);
        //axios.post('http://localhost:3000/TESOL/user/login.php', inputs);

    }

    const handleSignUp = async (event) => {
        try {
            const response = await axios.post('http://localhost:8080/TESOL/endpoints/signup.php', signInputs);
            console.log(signInputs);
            console.log("Response:", response.data);
            
        } catch (error) {
            console.error("Error signing up:", error);
        }
        handleSubmit("signup", signInputs);
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
                        Access our Archive for Free.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Welcome Back!</h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="logFormEmail">
                            <Form.Control type="email" placeholder="Enter email address" value={logInputs.email} onChange={(e) => handleLogInputChange(e, "email")} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else. (hehe)
                            </Form.Text>
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
                            <Form.Control type="email" placeholder="Enter email" value={signInputs.email} onChange={(e) => handleSignInputChange(e, "email")} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else. (hehe)
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signformName">
                            <Form.Control type="name" placeholder="Enter your name" value={signInputs.name} onChange={(e) => handleSignInputChange(e, "name")}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signFormPassword">
                            <Form.Control type="password" placeholder="Password" value={signInputs.password} onChange={(e) => handleSignInputChange(e, "password")} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signFormConfirmPassword">
                            <Form.Control type="password" placeholder="Confirm your Password" value={signInputs.checkPass} onChange={(e) => handleSignInputChange(e, "checkPass")} />
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