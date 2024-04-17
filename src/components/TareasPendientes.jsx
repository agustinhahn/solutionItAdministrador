import { useState } from "react"
import ModalMasInfo from "./ModalMasInfo"

const TareasPendientes = ({ titular, direccion, telefono, trabajo, info_adicional, accesspoint_caja, direccion_ip_precinto, numero_cliente }) => {

    const [useModal, setUseModal] = useState(false)

    return (
        <div className='flex gap-3 bg-slate-500'>
            <div className='flex gap-3'>
                <p className="datosUser">{titular}</p>
                <p className="datosUser">{direccion}</p>
                <p className="datosUser">{telefono}</p>
                <p className="datosUser">{trabajo}</p>
                <p className="datosUser">{accesspoint_caja}</p>
                <p className="datosUser">{direccion_ip_precinto}</p>
                <p className="datosUser">{numero_cliente}</p>
            </div>
            {
                useModal? (<ModalMasInfo info_adicional={info_adicional} />):null
            }
            <div className='flex gap-3'>
                <button onClick={()=>{setUseModal(true)}} >+ info</button>
                <button>editar</button>
                <button>eliminar</button>
            </div>
        </div>
    )
}

export default TareasPendientes