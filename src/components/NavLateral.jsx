import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavLateral() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div>
            <button onClick={handleShow} className='bg-blue-400/40 absolute top-0 left-0 right-0 z-10 w-40 mt-11 ml-9'>
                    Menu
            </button>
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