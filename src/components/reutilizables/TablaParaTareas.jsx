import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import {  setTareasPendientes, agregarNuevaTarea, eliminarTarea } from "../../features/itAdminSlice"
import { useGetTrabajosQuery } from "../../app/services/itServicesAdmin";
import ButtonActionTP from "./ButtonActionTP";
import ModalMasInfo from "../ModalMasInfo"
import ModalEdit from "./ModalEdit"

const TablaParaTareas = ({id,titular,direccion,telefono,trabajo,info_adicional,accesspoint_caja,direccion_ip_precinto,numero_cliente}) => {

    const dispatch = useDispatch();
    const trabajosPendientesQuery = useGetTrabajosQuery()
    const tareasPendientesArray = useSelector(state => state.it.value.tareasPendientes)
    const tareasSuspendidasArray = useSelector(state => state.it.value.tareasSuspendidas)
    const [nuevaTarea, setNuevaTarea] = useState({})

    useEffect(() => {
        if (trabajosPendientesQuery.data) {
            dispatch(setTareasPendientes(trabajosPendientesQuery.data))
        }
    }, [trabajosPendientesQuery])

    // const fetchData = () => {
    //     trabajosPendientesQuery.refetch()
    // };

    useEffect(()=>{
        if(Object.keys(nuevaTarea).length === 0){
        }
        else{
            dispatch(agregarNuevaTarea(nuevaTarea));
        }
    }, [nuevaTarea])

    const [openModal, setOpenModal] = useState(false)

    const [useModal, setUseModal] = useState(false)
    const [useModalEdit, setUseModalEdit] = useState(false)

    const deleteTarea = ()=>{
        dispatch(eliminarTarea({id})) //tras presionar eliminar, que pregunte el motivo y lo guarde en una variable para el registro.
    }

    return (
        <div>
            <table>
                <thead>
                    <tr className="divTablaTitulos">
                        <th className="filaTabla">TITULAR</th>
                        <th className="filaTabla">DIRECCION</th>
                        <th className="filaTabla">TELEFONO</th>
                        <th className="filaTabla">TRABAJO</th>
                        <th className="filaTabla">ACCP/CAJA</th>
                        <th className="filaTabla">IP/PRECINT</th>
                        <th className="filaTabla">N CLIENTE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <div className="divTabla">
                            <td className="filaTabla" >{titular}</td>
                            <td className="filaTabla">{direccion}</td>
                            <td className="filaTabla">{telefono}</td>
                            <td className="filaTabla">{trabajo}</td>
                            <td className="filaTabla">{accesspoint_caja}</td>
                            <td className="filaTabla">{direccion_ip_precinto}</td>
                            <td className="filaTabla">{numero_cliente}</td>
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
                            <ButtonActionTP title={"+ info"} functionButton={setUseModal} dataFunction={true}/>
                            <ButtonActionTP title={"editar"} functionButton={setUseModalEdit} dataFunction={true}  />
                            <ButtonActionTP title={"eliminar"}functionButton={deleteTarea} dataFunction=" "  />
                        </div>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TablaParaTareas