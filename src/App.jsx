import NavLateral from "./components/NavLateral"
import AreaTareas from "./components/AreaTareas"
import { useState } from 'react';


const App = () =>{

  const [mostrarMenu, setMostrarMenu] =useState(false)

  const handleOpenModal = () =>{
    setMostrarMenu(true)
  }
  return(
    <>
    <div className="container">
      <div>
        <button className="btnMenu" onClick={handleOpenModal}>MENU</button>
        <NavLateral show={mostrarMenu} setMostrarMenu={setMostrarMenu} />
      </div>
      <div>
        <AreaTareas />
      </div>
    </div>
    </>
  )
}

export default App