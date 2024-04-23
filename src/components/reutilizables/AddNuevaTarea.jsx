

const AddNuevaTarea = ({functionButton, title}) => {

    return (
        <>
            <button onClick={()=>functionButton(true)}  className='btnAgregarTarea'>{title}</button>
        </>
    )
}

export default AddNuevaTarea