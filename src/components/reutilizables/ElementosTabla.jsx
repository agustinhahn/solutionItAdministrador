import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import {  eliminarTarea } from "../../features/itAdminSlice"
import ModalEdit from "../ModalEdit"
import ButtonActionTP from "./ButtonActionTP"
import ModalMasInformacion from "../ModalMasInformacion"

const ElementosTabla = ({ id, titular, direccion, telefono, trabajo, info_adicional, accesspoint_caja, direccion_ip_precinto, numero_cliente,horario,setUseModal,useModal}) => {
    const dispatch = useDispatch();


    const deleteTarea = () => {
        dispatch(eliminarTarea({ id })) 
    }

    return (
        <>
            <tbody className="flex">
                <tr className="divTabla">
                    <td className="filaTabla" >{titular}</td>
                    <td className="filaTabla">{direccion}</td>
                    <td className="filaTabla">{telefono}</td>
                    <td className="filaTabla">{trabajo}</td>
                    <td className="flex">
                        <ModalMasInformacion
                        info_adicional={info_adicional}
                        accesspoint_caja={accesspoint_caja}
                        direccion_ip_precinto={direccion_ip_precinto}
                        numero_cliente={numero_cliente}
                        horario={horario}
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
                        <ButtonActionTP title={"Eliminar"} functionButton={deleteTarea} dataFunction=" " />
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default ElementosTabla