import { useState, useEffect } from "react"
import AddNuevaTarea from "./reutilizables/AddNuevaTarea"
import ModalNuevaTarea from "./reutilizables/ModalNuevaTarea"
import { useDispatch, useSelector } from 'react-redux'
import {  setTareasPendientes, agregarNuevaTarea } from '../features/itAdminSlice'
import { useGetTrabajosQuery } from "../app/services/itServicesAdmin"
import TablaParaTareas from "./reutilizables/TablaParaTareas"

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


    return (
        <div className='areaTareas'>
            <h1>Area de Tareas</h1>
            <div className="flex gap-8">
                <AddNuevaTarea functionButton={setOpenModal} title={"Agregar Nueva Tarea"} />
                <button onClick={()=>{console.log(tareasPendientesArray)}}>verarray</button>
            </div>
            <div>
            {
                openModal? (<ModalNuevaTarea setOpenModal={setOpenModal} setNuevaTarea={setNuevaTarea} />) : null
            }
            {
                tareasPendientesArray.length>0? (<TablaParaTareas />):null
            }
            {
                tareasSuspendidasArray.length>0? (
                    tareasSuspendidasArray.map((tarea2, index)=>(
                        <p key={index}>{tarea2.titular}</p>
                    ))
                ):null
            }
            </div>

        </div>
    )
}

export default AreaTareas