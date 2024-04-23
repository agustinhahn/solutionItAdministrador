import { useState } from 'react';
import ButtonActionTP from './reutilizables/ButtonActionTP';
import Modal from 'react-bootstrap/Modal';

const ModalMasInformacion = ({info_adicional,accesspoint_caja,direccion_ip_precinto,numero_cliente}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <ButtonActionTP title={"+ Info"} functionButton={handleShow} dataFunction={true} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='modalHeader'>
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
                    <button className='btnCancelModal' onClick={handleClose}>
                        Cerrar
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalMasInformacion;