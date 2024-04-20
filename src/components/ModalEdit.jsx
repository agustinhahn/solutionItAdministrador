import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux'
import { editarTarea } from '../features/itAdminSlice';

const ModalMasInformacion = ({id, titular, direccion, telefono, trabajo, info_adicional, accesspoint_caja, direccion_ip_precinto, numero_cliente }) => {
    const dispatch = useDispatch();
    const handleAgregarTrabajo = (e) => {
        const titular = e.target.titular.value;
        const numero_cliente = e.target.numero_cliente.value.trim();
        const direccion = e.target.direccion.value;
        const telefono = e.target.telefono.value.trim();
        const trabajo = e.target.trabajo.value;
        const accesspoint_caja = e.target.accesspoint_caja.value.trim();
        const direccion_ip_precinto = e.target.direccion_ip_precinto.value.trim();
        const info_adicional = e.target.info_adicional.value.trim();
        if (titular && direccion && trabajo) {
            const nuevoObjetoEditado = {
                id,
                titular,
                numero_cliente,
                direccion,
                telefono,
                trabajo,
                accesspoint_caja,
                direccion_ip_precinto,
                info_adicional
            };
            dispatch(editarTarea(nuevoObjetoEditado))
            handleClose()
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                boton edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>MAS DATOS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='flex flex-col gap-3 bg-purple-500 w-auto'>
                        <form onSubmit={e => {
                            e.preventDefault()
                            handleAgregarTrabajo(e)
                        }}>
                            <input name='titular' className='inputNuevaTarea' type="text" defaultValue={titular} />
                            <input name='numero_cliente' className='inputNuevaTarea' type="text" defaultValue={numero_cliente} />
                            <input name='direccion' className='inputNuevaTarea' type='text' defaultValue={direccion} />
                            {/* <input name='' className='inputNuevaTarea' type='text' defaultValue='Localidad' /> despeues lo agrego  */}
                            <input name='telefono' className='inputNuevaTarea' type='text' defaultValue={telefono} />
                            <input name='trabajo' className='inputNuevaTarea' type='text' defaultValue={trabajo} />
                            <input name='accesspoint_caja' className='inputNuevaTarea' type='text' defaultValue={accesspoint_caja} />
                            <input name='direccion_ip_precinto' className='inputNuevaTarea' type='text' defaultValue={direccion_ip_precinto} />
                            <textarea name='info_adicional' className='inputTextArea' type='text' defaultValue={info_adicional} />
                            {/* <input name='' className='inputNuevaTarea' type='number' value='Horario' /> despues lo agrego*/}
                            <div>
                                <button type='submit' className='w-44'>Confirmar cambio</button>
                                <button onClick={()=>handleClose()}>Cerrar</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalMasInformacion;