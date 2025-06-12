import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false);
    const [modalTilte, setModalTitle] = useState("")
    const [modalText, setModalText] = useState("")
    const handleClose = () => setShow(false);


    const checkValidation = (e) => {
        e.preventDefault()
        if (!email && !password) {
            setModalTitle("Missing Email and Password")
            setModalText("Please Enter an email and a password.")
            setShow(true)
        }

        else if (!email) {
            setModalTitle("Missing Email")
            setModalText("Please Enter an email.")
            setShow(true)
        }

        else if (!password) {
            setModalTitle("Missing Password")
            setModalText("Please Enter a password.")
            setShow(true)
        }

        else if (!email.includes("@") || !email.includes(".com")) {
            setModalTitle("Wrong Email")
            setModalText("Please enter a valid email")
            setShow(true)
        }

        else {
            setModalTitle("Successful")
            setModalText("Logged in successfully")
            setShow(true)
            setEmail("")
            setPassword("")
        }



    }
    return (
        <div className='Login-height p-5 w-100'>
            <Form className='d-flex flex-column justify-content-center align-items-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fs-5'>Email address</Form.Label>
                    <Form.Control className='fs-6' value={email} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-5'>Password</Form.Label>
                    <Form.Control className='fs-6' value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button className='mt-4' onClick={checkValidation} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTilte}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalText}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Login;