import { useState } from 'react';
import ButtonActionTP from './reutilizables/ButtonActionTP';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux'
import { editarTarea } from '../features/itAdminSlice';

const ModalMasInformacion = ({id, titular, direccion, telefono, trabajo, info_adicional, accesspoint_caja, direccion_ip_precinto, numero_cliente }) => {
    const dispatch = useDispatch();
    const horariosDisponibles = useSelector(state => state.it.value.horarios)
    const handleAgregarTrabajo = (e) => {
        const titular = e.target.titular.value;
        const numero_cliente = e.target.numero_cliente.value.trim() !== "" ? e.target.numero_cliente.value : "indefinido";
        const direccion = e.target.direccion.value;
        const telefono = e.target.telefono.value.trim() !== "" ? e.target.telefono.value : "indefinido";
        const trabajo = e.target.trabajo.value;
        const accesspoint_caja = e.target.accesspoint_caja.value.trim() !== "" ? e.target.accesspoint_caja.value : "indefinido";
        const direccion_ip_precinto = e.target.direccion_ip_precinto.value.trim() !== "" ? e.target.direccion_ip_precinto.value : "indefinido";
        const info_adicional = e.target.info_adicional.value.trim() !== "" ? e.target.info_adicional.value : "indefinido";
        const horario = e.target.horario.value;
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
                info_adicional,
                horario
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

            <ButtonActionTP title={"Editar"} functionButton={handleShow} dataFunction={true} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='modalHeader'>
                    <Modal.Title>EDITAR DATOS</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <div className='flex flex-col gap-3 w-auto'>
                        <form onSubmit={e => {
                            e.preventDefault()
                            handleAgregarTrabajo(e)
                        }}>
                            <input name='titular' className='inputNuevaTarea' type="text" defaultValue={titular === "indefinido" ? "": titular} placeholder="Nombre del cliente"/>
                            <input name='numero_cliente' className='inputNuevaTarea' type="text" defaultValue={numero_cliente === "indefinido" ? "": numero_cliente} placeholder="Numero de cliente" />
                            <input name='direccion' className='inputNuevaTarea' type='text' defaultValue={direccion  === "indefinido" ? "": direccion} placeholder='Direccion'/>
                            {/* <input name='' className='inputNuevaTarea' type='text' defaultValue='Localidad' /> despeues lo agrego  */}
                            <input name='telefono' className='inputNuevaTarea' type='text' defaultValue={telefono  === "indefinido" ? "": telefono} placeholder='Contacto'  />
                            <input name='trabajo' className='inputNuevaTarea' type='text' defaultValue={trabajo  === "indefinido" ? "": trabajo} placeholder='Trabajo' />
                            <input name='accesspoint_caja' className='inputNuevaTarea' type='text' defaultValue={accesspoint_caja === "indefinido" ? "": accesspoint_caja} placeholder='Accesspoint/Caja'  />
                            <input name='direccion_ip_precinto' className='inputNuevaTarea' type='text' defaultValue={direccion_ip_precinto  === "indefinido" ? "": direccion_ip_precinto} placeholder='Direccion IP/Precinto' />
                            <select className='selectForm' name="horario" >
                                <option className='opcionSelect'value="0">Elegir turno</option>
                                {
                                    horariosDisponibles.map((h, index) => (
                                        <option
                                            key={index}
                                            className='opcionSelect'
                                            value={h}
                                        >{h}</option>
                                    ))
                                }
                            </select>
                            <textarea name='info_adicional' className='inputTextArea' type='text' defaultValue={info_adicional  === "indefinido" ? "": info_adicional}  placeholder='Comentarios adicionales' />
                            {/* <input name='' className='inputNuevaTarea' type='number' value='Horario' /> despues lo agrego*/}
                            <div className='flex justify-center gap-4 mt-4 mb-8'>
                                <button type='submit' className='btnOkModal'>Confirmar cambio</button>
                                <button onClick={()=>handleClose()} className='btnCancelModal'>Cerrar</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalMasInformacion;