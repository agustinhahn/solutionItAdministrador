

const AddNuevaTarea = ({functionButton, title, actionFunction}) => {

    return (
        <>
            <button onClick={()=>functionButton(actionFunction)}  className='btnAgregarTarea'>{title}</button>
        </>
    )
}

export default AddNuevaTarea