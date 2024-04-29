import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';

const initialState = {
    value: {
        products: [],
        tareasPendientes: [],
        tareasFinalizadas: [],
        alertasRecibidas: [],
        nuevaTareaFinalizada : [],
        nuevaTareaSuspendida: [],
        tareasSuspendidas: [],
        mediosdepago: [],
        datosTareaFinalizada: {
            equipoUsado: [],
            idTarea: [],
            pago: {
                medio: [],
                importe: []
            },
            comentarios: []
        },
        datosArrayTareasFinalizadas: []
    }
}

export const itAdminSlice = createSlice({

    name: "it",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.value.products = action.payload
        },
        equipoUsado: (state, action) => {
            const { id } = action.payload;
            if(id.length>0) {
                let arrayModificado = state.value.products;
                id.forEach(element => {
                    const nuevoArrayModificado = arrayModificado.map((p) => {
                        if (p.id === element) {
                            return { ...p, cantidad: p.cantidad - 1 };
                        }
                        return p;
                    }
                    );
                    arrayModificado = nuevoArrayModificado
                });
                state.value.products = arrayModificado;
            }
        },
        estadoTarea: (state, action) => {
            const { idTarea } = action.payload;
            const tareaIndex = state.value.tareasPendientes.findIndex((p) => p.id == idTarea);
            if (tareaIndex !== -1) {
                const tarea = state.value.tareasPendientes.splice(tareaIndex, 1)[0]
                state.value.nuevaTareaFinalizada = tarea
                state.value.tareasFinalizadas.push(tarea)
            }
        },
        setTareasPendientes: (state, action) => {
            state.value.tareasPendientes = action.payload
        },
        agregarNuevaTarea:(state,action)=>{
            state.value.tareasPendientes.push(action.payload)
        },
        eliminarTarea:(state,action)=>{
            const {id} = action.payload;
            const newArray = state.value.tareasPendientes.filter((t)=>t.id !==id)
            state.value.tareasPendientes = newArray
        },
        editarTarea:(state,action)=>{
            const indexArrayEdit = state.value.tareasPendientes.findIndex((item)=> item.id === action.payload.id)
            if(indexArrayEdit!==-1){
                const deleteObj = state.value.tareasPendientes.splice(indexArrayEdit,1);
                state.value.tareasPendientes.push(action.payload)
            }
        }
    }})

export const { equipoUsado, estadoTarea, setProducts, setTareasPendientes,agregarNuevaTarea,eliminarTarea, editarTarea} = itAdminSlice.actions

export default itAdminSlice.reducer