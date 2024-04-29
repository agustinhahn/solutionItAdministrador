import Modal from 'react-bootstrap/Modal';
import { v4 as uuidv4 } from 'uuid';

const ModalTareaNueva = ({ setOpenModal, setNuevaTarea, show }) => {
    const handleAgregarTrabajo = (e) => {
        const titular = e.target.titular.value;
        const numero_cliente = e.target.numero_cliente.value.trim() !== "" ? e.target.numero_cliente.value : "indefinido";;
        const direccion = e.target.direccion.value;
        const telefono = e.target.telefono.value.trim() !== "" ? e.target.telefono.value : "indefinido";;
        const trabajo = e.target.trabajo.value;
        const accesspoint_caja = e.target.accesspoint_caja.value.trim() !== "" ? e.target.accesspoint_caja.value : "indefinido";;
        const direccion_ip_precinto = e.target.direccion_ip_precinto.value.trim() !== "" ? e.target.direccion_ip_precinto.value : "indefinido";;
        const info_adicional = e.target.info_adicional.value.trim() !== "" ? e.target.info_adicional.value : "indefinido";;
        if (titular && direccion && trabajo) {
            const nuevaTareaObjeto = {
                id: uuidv4(),
                titular,
                numero_cliente,
                direccion,
                telefono,
                trabajo,
                accesspoint_caja,
                direccion_ip_precinto,
                info_adicional
            };
            setNuevaTarea(nuevaTareaObjeto);
            setOpenModal(false)
        }
    }

    const handleClose = () => setOpenModal(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='modalHeader'>
                    <Modal.Title>AGREGAR NUEVO TRABAJO</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <div className='flex flex-col gap-3 w-auto'>
                        <form onSubmit={e => {
                            e.preventDefault()
                            handleAgregarTrabajo(e)
                        }}>
                            <input name='titular' className='inputNuevaTarea' type="text" placeholder="Nombre del cliente" />
                            <input name='numero_cliente' className='inputNuevaTarea' type="text" placeholder="Numero de cliente" />
                            <input name='direccion' className='inputNuevaTarea' type='text' placeholder='Direccion' />
                            {/* <input name='' className='inputNuevaTarea' type='text' placeholder='Localidad' /> despeues lo agrego  */}
                            <input name='telefono' className='inputNuevaTarea' type='text' placeholder='Contacto' />
                            <input name='trabajo' className='inputNuevaTarea' type='text' placeholder='Trabajo' />
                            <input name='accesspoint_caja' className='inputNuevaTarea' type='text' placeholder='Accesspoint/Caja' />
                            <input name='direccion_ip_precinto' className='inputNuevaTarea' type='text' placeholder='Direccion IP/Precinto' />
                            <textarea name='info_adicional' className='inputTextArea' type='text' placeholder='Comentarios adicionales' />
                            {/* <input name='' className='inputNuevaTarea' type='number' placeholder='Horario' /> despues lo agrego*/}
                            <span className='spanModal'>Campos obligatorios: Nombre, direccion y trabajo.</span>
                            <div className='flex justify-center gap-4 mt-4 mb-8'>
                                <button type='submit' className='btnOkModal'>Agregar trabajo</button>
                                <button onClick={() => { setOpenModal(false) }} className='btnCancelModal'>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalTareaNueva;