import { useState } from "react"
import ModalMasInfo from "./ModalMasInfo"
import { useDispatch, useSelector } from 'react-redux'
import {  eliminarTarea } from '../features/itAdminSlice'
import ModalEdit from "./reutilizables/ModalEdit"
import ButtonActionTP from "./reutilizables/ButtonActionTP"
import DataPrintTareasPendientes from "./reutilizables/DataPrintTareasPendientes"

const TareasPendientes = ({ titular, direccion, telefono, trabajo, info_adicional, accesspoint_caja, direccion_ip_precinto, numero_cliente, id}) => {
    const dispatch = useDispatch();

    const [useModal, setUseModal] = useState(false)
    const [useModalEdit, setUseModalEdit] = useState(false)

    const deleteTarea = ()=>{
        dispatch(eliminarTarea({id})) //tras presionar eliminar, que pregunte el motivo y lo guarde en una variable para el registro.
    }

    return (
        <div className='flex gap-3 bg-slate-500'>
            <DataPrintTareasPendientes  titular={titular}
                                        direccion={direccion}
                                        telefono={telefono}
                                        trabajo={trabajo}
                                        accesspoint_caja={accesspoint_caja}
                                        direccion_ip_precinto={direccion_ip_precinto}
                                        numero_cliente={numero_cliente}
                                        />
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
                <ButtonActionTP title={"+ info"} functionButton={setUseModal} dataFunction={true}/>
                <ButtonActionTP title={"editar"} functionButton={setUseModalEdit} dataFunction={true}  />
                <ButtonActionTP title={"eliminar"}functionButton={deleteTarea} dataFunction=" "  />
            </div>
        </div>
    )
}

export default TareasPendientes