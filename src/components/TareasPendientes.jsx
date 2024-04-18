import { useState } from "react"
import ModalMasInfo from "./ModalMasInfo"
import { useDispatch, useSelector } from 'react-redux'
import {  eliminarTarea } from '../features/itAdminSlice'
import ModalEdit from "./ModalEdit"

const TareasPendientes = ({ titular, direccion, telefono, trabajo, info_adicional, accesspoint_caja, direccion_ip_precinto, numero_cliente, id}) => {
    const dispatch = useDispatch();

    const [useModal, setUseModal] = useState(false)
    const [useModalEdit, setUseModalEdit] = useState(false)

    const deleteTarea = ()=>{
        dispatch(eliminarTarea({id})) //tras presionar eliminar, que pregunte el motivo y lo guarde en una variable para el registro.
    }

    return (
        <div className='flex gap-3 bg-slate-500'>
            <div className='flex gap-3'>
                <p className="datosUser">{titular}</p>
                <p className="datosUser">{direccion}</p>
                <p className="datosUser">{telefono}</p>
                <p className="datosUser">{trabajo}</p>
                <p className="datosUser">{accesspoint_caja}</p>
                <p className="datosUser">{direccion_ip_precinto}</p>
                <p className="datosUser">{numero_cliente}</p>
            </div>
            {
                useModal? (<ModalMasInfo info_adicional={info_adicional} />):null
            }
            {
                useModalEdit?(<ModalEdit 
                                titular={titular}
                                direccion={direccion} 
                                telefono={telefono} 
                                trabajo={trabajo}
                                info_adicional={info_adicional}
                                accesspoint_caja={accesspoint_caja}
                                direccion_ip_precinto={direccion_ip_precinto}
                                numero_cliente={numero_cliente}
                                id={id}
                                setUseModalEdit={setUseModalEdit}
                                />):null
            }
            <div className='flex gap-3'>
                <button onClick={()=>{setUseModal(true)}} >+ info</button>
                <button onClick={()=>{setUseModalEdit(true)}} >editar</button>
                <button onClick={()=>deleteTarea()}>eliminar</button>
            </div>
        </div>
    )
}

export default TareasPendientes