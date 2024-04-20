import { useDispatch, useSelector } from 'react-redux'
import {  editarTarea } from '../../features/itAdminSlice'



const ModalEditw = ({ titular, direccion, telefono, trabajo, info_adicional, accesspoint_caja, direccion_ip_precinto, numero_cliente, id,setUseModalEdit }) => {

    const dispatch = useDispatch();
    const handleAgregarTrabajo = (e) =>{
        const titular = e.target.titular.value;
        const numero_cliente = e.target.numero_cliente.value.trim();
        const direccion = e.target.direccion.value;
        const telefono = e.target.telefono.value.trim();
        const trabajo = e.target.trabajo.value;
        const accesspoint_caja = e.target.accesspoint_caja.value.trim();
        const direccion_ip_precinto = e.target.direccion_ip_precinto.value.trim();
        const info_adicional = e.target.info_adicional.value.trim();
        if(titular && direccion && trabajo){
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
            console.log(nuevoObjetoEditado)
            dispatch(editarTarea(nuevoObjetoEditado))
            setUseModalEdit(false)
        }
}
    return (
        <div className='flex flex-col gap-3 bg-purple-500 w-auto'>
            <form onSubmit={e => {
                e.preventDefault()
                handleAgregarTrabajo(e)
            }}>
                <input name='titular' className='inputNuevaTarea' type="text" defaultValue={titular}/>
                <input name='numero_cliente' className='inputNuevaTarea' type="text" defaultValue={numero_cliente} />
                <input name='direccion' className='inputNuevaTarea' type='text' defaultValue={direccion} />
                {/* <input name='' className='inputNuevaTarea' type='text' defaultValue='Localidad' /> despeues lo agrego  */} 
                <input name='telefono' className='inputNuevaTarea' type='text' defaultValue={telefono} />
                <input name='trabajo' className='inputNuevaTarea' type='text' defaultValue={trabajo} />
                <input name='accesspoint_caja' className='inputNuevaTarea' type='text' defaultValue={accesspoint_caja} />
                <input name='direccion_ip_precinto' className='inputNuevaTarea' type='text' defaultValue={direccion_ip_precinto} />
                <textarea name='info_adicional' className='inputTextArea' type='text' defaultValue={info_adicional} />
                {/* <input name='' className='inputNuevaTarea' type='number' value='Horario' /> despues lo agrego*/}
            <div className='flex justify-center gap-4 mt-4 mb-8'>
                <button type='submit' className='w-44'>Confirmar cambio</button>
                <button onClick={()=>{setUseModalEdit(false)}} className='w-44'>Cancelar</button>
            </div>
            </form>
        </div>
    )
}
export default ModalEditw