import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { setTareasPendientes, agregarNuevaTarea, eliminarTarea } from "../../features/itAdminSlice"
import ModalEdit from "../ModalEdit"
import ButtonActionTP from "./ButtonActionTP"
import ModalMasInformacion from "../ModalMasInformacion"

const ElementosTabla = ({ id, titular, direccion, telefono, trabajo, info_adicional, accesspoint_caja, direccion_ip_precinto, numero_cliente,setUseModal,useModal}) => {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false)
    const [useModalEdit, setUseModalEdit] = useState(false)

    const deleteTarea = () => {
        dispatch(eliminarTarea({ id })) //tras presionar eliminar, que pregunte el motivo y lo guarde en una variable para el registro.
    }


    return (
        <>
            <tbody className="flex">
                <tr className="divTabla">
                    <td className="filaTabla" >{titular}</td>
                    <td className="filaTabla">{direccion}</td>
                    <td className="filaTabla">{telefono}</td>
                    <td className="filaTabla">{trabajo}</td>
                    {/* {
                        useModalEdit ? (<ModalEdit
                            key={id}
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
                        />) : null
                    } */}
                    <td className="flex">
                        <ModalMasInformacion
                        info_adicional={info_adicional}
                        accesspoint_caja={accesspoint_caja}
                        direccion_ip_precinto={direccion_ip_precinto}
                        numero_cliente={numero_cliente}
                        />
                        <ModalEdit 
                            titular={titular}
                            direccion={direccion}
                            telefono={telefono}
                            trabajo={trabajo}
                            info_adicional={info_adicional}
                            accesspoint_caja={accesspoint_caja}
                            direccion_ip_precinto={direccion_ip_precinto}
                            numero_cliente={numero_cliente}
                            id={id}
                        />
                        {/* <ButtonActionTP title={"editar"} functionButton={setUseModalEdit} dataFunction={true} /> */}
                        <ButtonActionTP title={"eliminar"} functionButton={deleteTarea} dataFunction=" " />
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default ElementosTabla