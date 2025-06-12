
import { useContext, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { ErrorContext } from '../context/ErrorContextProvider';

const Error = () => {
    const { errorMessage, setErrorMessage } = useContext(ErrorContext)
    const [show, setShow] = useState(true);
    if (!errorMessage) return null
    const handleClose = () => {
        setShow(false)
        setErrorMessage("")
    }
    if (show) {
        return (
            <Alert className='d-flex justify-content-center align-items-center' variant="danger" onClose={handleClose} dismissible>
                <p>
                    {errorMessage.message}
                </p>
            </Alert>
        );
    }
}

export default Error;