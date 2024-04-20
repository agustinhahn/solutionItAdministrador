import React from 'react'

const DataPrintTareasPendientes = ({titular,direccion,telefono,trabajo,accesspoint_caja,direccion_ip_precinto,numero_cliente}) => {
    return (
        <>
            <div className='flex gap-3'>
                <p className="datosUser">{titular}</p>
                <p className="datosUser">{direccion}</p>
                <p className="datosUser">{telefono}</p>
                <p className="datosUser">{trabajo}</p>
                <p className="datosUser">{accesspoint_caja}</p>
                <p className="datosUser">{direccion_ip_precinto}</p>
                <p className="datosUser">{numero_cliente}</p>
            </div>
        </>
    )
}

export default DataPrintTareasPendientes