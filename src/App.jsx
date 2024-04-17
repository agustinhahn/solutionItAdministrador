import ContainerGral from "./components/ContainerGral"
import NavLateral from "./components/NavLateral"
import AreaTareas from "./components/AreaTareas"


const App = () =>{
  return(
    <>
    <div className="grid-container">
      <div className="div1">
        <NavLateral />
      </div>
      <div className="div2">
        <AreaTareas />
      </div>
      <div className="div3">titulos</div>
    </div>
    </>
  )
}

export default App