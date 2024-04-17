import { useState, useEffect } from "react"
import AddNuevaTarea from "./AddNuevaTarea"
import ModalNuevaTarea from "./ModalNuevaTarea"
import { useDispatch, useSelector } from 'react-redux'
import {  setTareasPendientes, agregarNuevaTarea } from '../features/itAdminSlice'
import { useGetTrabajosQuery } from "../app/services/itServicesAdmin"
import TareasPendientes from "./TareasPendientes"

const AreaTareas = () => {
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

    const fetchData = () => {
        trabajosPendientesQuery.refetch()
    };

    useEffect(()=>{
        if(Object.keys(nuevaTarea).length === 0){
            console.log("esta vacio")
        }
        else{
            console.log("hola me estoy ejecutando")
            console.log(nuevaTarea)
            dispatch(agregarNuevaTarea({nuevaTarea:nuevaTarea}));
        }
    }, [nuevaTarea])

    const [openModal, setOpenModal] = useState(false)


    return (
        <div className='flex flex-col gap-5 items-center'>
            <h1>Area de Tareas</h1>
            <AddNuevaTarea setOpenModal={setOpenModal} />
            {
                openModal? (<ModalNuevaTarea setOpenModal={setOpenModal} setNuevaTarea={setNuevaTarea} />) : null
            }
            {
                tareasPendientesArray.length>0? (
                    tareasPendientesArray.map((tarea, index)=>(
                        <TareasPendientes   key={index} 
                                            titular={tarea.titular} 
                                            direccion={tarea.direccion}
                                            telefono={tarea.telefono}
                                            trabajo={tarea.trabajo}
                                            info_adicional={tarea.info_adicional}
                                            accesspoint_caja={tarea.accesspoint_caja}
                                            direccion_ip_precinto={tarea.direccion_ip_precinto}
                                            numero_cliente={tarea.numero_cliente}
                                            />
                    ))
                ):null
            }
                        {
                tareasSuspendidasArray.length>0? (
                    tareasSuspendidasArray.map((tarea2, index)=>(
                        <p key={index}>{tarea2.titular}</p>
                    ))
                ):null
            }
        </div>
    )
}

export default AreaTareas