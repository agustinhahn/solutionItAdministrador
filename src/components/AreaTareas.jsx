import { useState, useEffect } from "react"
import AddNuevaTarea from "./reutilizables/AddNuevaTarea"
import { useDispatch, useSelector } from 'react-redux'
import {  setTareasPendientes, agregarNuevaTarea } from '../features/itAdminSlice'
import { useGetTrabajosQuery, usePostActualizarTareasPendientesMutation } from "../app/services/itServicesAdmin"
import TablaParaTareas from "./reutilizables/TablaParaTareas"
import ModalTareaNueva from "./reutilizables/ModalTareaNueva"

const AreaTareas = () => {
    const dispatch = useDispatch();
    const trabajosPendientesQuery = useGetTrabajosQuery()
    const [actualizarTareasPendientes] = usePostActualizarTareasPendientesMutation()
    const tareasPendientesArray = useSelector(state => state.it.value.tareasPendientes)
    const tareasSuspendidasArray = useSelector(state => state.it.value.tareasSuspendidas)
    const [nuevaTarea, setNuevaTarea] = useState({})


    useEffect(() => {
        if (trabajosPendientesQuery.data) {
            dispatch(setTareasPendientes(trabajosPendientesQuery.data))
        }
    }, [trabajosPendientesQuery])


    useEffect(()=>{
        if(Object.keys(nuevaTarea).length === 0){
        }
        else{
            dispatch(agregarNuevaTarea(nuevaTarea));
        }
    }, [nuevaTarea])

    const actualizarBd = () =>{
        actualizarTareasPendientes({obj:tareasPendientesArray})
    }

    const [show, setShow] = useState(false)

    return (
        <div className='areaTareas'>
            <div className="flex gap-8">
                <AddNuevaTarea functionButton={setShow} title={"Agregar Nueva Tarea"} actionFunction={true} />
                <AddNuevaTarea functionButton={actualizarBd} title={"Enviar App movil"} actionFunction={" "} />
            </div>
            <div>
            {
                show? (<ModalTareaNueva setOpenModal={setShow} show={show} setNuevaTarea={setNuevaTarea} />) : null
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