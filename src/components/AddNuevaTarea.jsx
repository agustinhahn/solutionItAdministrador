

const AddNuevaTarea = ({setOpenModal}) => {

    return (
        <>
            <button onClick={()=>setOpenModal(true)}  className='w-56'>AGREGAR NUEVA TAREA</button>
        </>
    )
}

export default AddNuevaTarea