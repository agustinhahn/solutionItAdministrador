import {  useEffect, useState} from "react"
import { useDispatch, useSelector } from 'react-redux'
import {  setTareasPendientes, agregarNuevaTarea } from "../../features/itAdminSlice"
import { useGetTrabajosQuery } from "../../app/services/itServicesAdmin";
import ElementosTabla from "./ElementosTabla";

const TablaParaTareas = () => {

    const dispatch = useDispatch();
    const trabajosPendientesQuery = useGetTrabajosQuery()
    const tareasPendientesArray = useSelector(state => state.it.value.tareasPendientes)

    useEffect(() => {
        if (trabajosPendientesQuery.data) {
            dispatch(setTareasPendientes(trabajosPendientesQuery.data))
        }
    }, [trabajosPendientesQuery])

    return (
        <div className="tablaPrincipal">
            <table>
                <thead>
                    <tr className="divTablaTitulos">
                        <th className="filaTabla">TITULAR</th>
                        <th className="filaTabla">DIRECCION</th>
                        <th className="filaTabla">TELEFONO</th>
                        <th className="filaTabla">TRABAJO</th>
                    </tr>
                </thead>
                    {
                        tareasPendientesArray.map((tarea, index)=>(
                            <ElementosTabla 
                            key={index}
                            id={tarea.id}
                            titular={tarea.titular}
                            direccion={tarea.direccion}
                            telefono={tarea.telefono}
                            trabajo={tarea.trabajo}
                            accesspoint_caja={tarea.accesspoint_caja}
                            direccion_ip_precinto={tarea.direccion_ip_precinto}
                            numero_cliente={tarea.numero_cliente}
                            info_adicional={tarea.info_adicional}
                            />
                        ))
                    }
            </table>
        </div>
    )
}

export default TablaParaTareas