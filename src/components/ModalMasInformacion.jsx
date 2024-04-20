import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalMasInformacion = ({info_adicional,accesspoint_caja,direccion_ip_precinto,numero_cliente}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                boton modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>MAS DATOS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='font-bold'>INFORMACION ADICIONAL</p>
                    <p>{info_adicional}</p>
                    <p className='font-bold'>ACCESSPOINT/CAJA</p>
                    <p>{accesspoint_caja}</p>
                    <p className='font-bold'>DIRECCION IP/ PRECINTO</p>
                    <p>{direccion_ip_precinto}</p>
                    <p className='font-bold'>NUMERO DE CLIENTE</p>
                    <p>{numero_cliente}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalMasInformacion;