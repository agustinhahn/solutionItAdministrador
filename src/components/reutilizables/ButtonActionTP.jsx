import React from 'react'

const ButtonActionTP = ({title,functionButton, dataFunction}) => {
    return (
        <>
            <button onClick={()=>functionButton(dataFunction)} className="btn btn-primary">{title}</button>
        </>

    )
}

export default ButtonActionTP