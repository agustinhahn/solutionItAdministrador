import React from 'react'

const ButtonActionTP = ({title,functionButton, dataFunction}) => {
    return (
        <>
            <button onClick={()=>functionButton(dataFunction)} className="btnActionTP">{title}</button>
        </>

    )
}

export default ButtonActionTP