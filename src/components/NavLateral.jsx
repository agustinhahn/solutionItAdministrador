
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavLateral({show, setMostrarMenu}) {

    const handleClose = () => setMostrarMenu(false);

    return (
        <>
        <div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>CUADRILLAS TECNICAS</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <button>soy boton</button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>

        </>
    );
}

export default NavLateral;