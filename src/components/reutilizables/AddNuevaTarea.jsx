

const AddNuevaTarea = ({functionButton, title}) => {

    return (
        <>
            <button onClick={()=>functionButton(true)}  className='w-56 bg-transparent border-red-400 '>{title}</button>
        </>
    )
}

export default AddNuevaTarea