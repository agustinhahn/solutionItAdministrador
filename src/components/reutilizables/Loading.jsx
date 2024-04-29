import React from 'react'

const Loading = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="superballs">
                <div className="superballs__dot"></div>
                <div className="superballs__dot"></div>
            </div>
            <div className='spanLoading'>
                <span>ACTUALIZANDO BASE DE DATOS</span>
            </div>
        </div>
    )
}

export default Loading