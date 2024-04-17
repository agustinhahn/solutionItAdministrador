
const ModalNuevaTarea = ({setOpenModal, setNuevaTarea}) => {

    const handleAgregarTrabajo = (e) =>{
        const titular = e.target.titular.value;
        const numero_cliente = e.target.numero_cliente.value;
        const direccion = e.target.direccion.value;
        const telefono = e.target.telefono.value;
        const trabajo = e.target.trabajo.value;
        const accesspoint_caja = e.target.accesspoint_caja.value;
        const direccion_ip_precinto = e.target.direccion_ip_precinto.value;
        const info_adicional = e.target.info_adicional.value;
        if(titular && direccion && trabajo){
            const nuevaTareaObjeto = {
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
    return (
        <div className='flex flex-col gap-3 bg-purple-500 w-auto'>
            <form onSubmit={ev => {
                ev.preventDefault()
                handleAgregarTrabajo(ev)
            }}>
                <input name='titular' className='inputNuevaTarea' type="text" placeholder="Nombre del cliente"/>
                <input name='numero_cliente' className='inputNuevaTarea' type="number" placeholder="Numero de cliente" />
                <input name='direccion' className='inputNuevaTarea' type='text' placeholder='Direccion' />
                {/* <input name='' className='inputNuevaTarea' type='text' placeholder='Localidad' /> despeues lo agrego  */} 
                <input name='telefono' className='inputNuevaTarea' type='number' placeholder='Contacto' />
                <input name='trabajo' className='inputNuevaTarea' type='text' placeholder='Trabajo' />
                <input name='accesspoint_caja' className='inputNuevaTarea' type='text' placeholder='Accesspoint/Caja' />
                <input name='direccion_ip_precinto' className='inputNuevaTarea' type='text' placeholder='Direccion IP/Precinto' />
                <textarea name='info_adicional' className='inputTextArea' type='text' placeholder='Comentarios adicionales' />
                {/* <input name='' className='inputNuevaTarea' type='number' placeholder='Horario' /> despues lo agrego*/}
            <div className='flex justify-center gap-4 mt-4 mb-8'>
                <button type='submit' className='w-44'>Agregar trabajo</button>
                <button onClick={()=>{setOpenModal(false)}} className='w-44'>Cancelar</button>
            </div>
            </form>
        </div>
    )
}

export default ModalNuevaTarea


