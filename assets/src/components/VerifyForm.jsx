import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

const OTPRegex = /^[0-9]+$/;

function VerifyForm() {

    const [code, setCode] = useState({
        value: '', error: ''
    });

    const handleInputChange = (event) => {
        const { value } = event.target;
    
        setCode((prevState) => ({
          ...prevState,
          value,
          error: ''
        }));
    };

    const isValid = () => {
        let valid = true;

        //check field if empty
        if(code.value.trim() === '') {
            setCode((prevState) => ({
                ...prevState,
                value: '', error: 'Enter code to submit',
            }));
            valid = false;
        }
        
        else if (!code.value.match(OTPRegex)) {
            // Check if the input matches the OTP regex
            setCode((prevState) => ({
                ...prevState,
                value: '',
                error: 'Invalid code. Enter only numbers.',
            }));
            valid = false;
        }


        return valid;

    }

    return (
        <div className='verifyForm'>
            <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={true}
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Verify your Account
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Enter OTP passcode sent to your email</h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="OTPCode">
                            <Form.Control type="text" placeholder="OTP Code" value={code.value} onChange={(e) => handleInputChange(e, "value")} />
                            <Form.Text className="text-muted" >
                                {code.error}
                            </Form.Text>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button>Verify</Button>
                    <Link Link to='/'>
                        <Button>Return to Homepage</Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default VerifyForm;
