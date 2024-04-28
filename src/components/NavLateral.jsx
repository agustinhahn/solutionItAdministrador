
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonNav from './reutilizables/ButtonNav';

function NavLateral({ show, setMostrarMenu }) {

    const handleClose = () => setMostrarMenu(false);

    return (
        <>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ButtonNav title={"patente1"} />
                        <ButtonNav title={"patente2"} />
                        <ButtonNav title={"patente3"} />
                        <ButtonNav title={"patente4"} />
                    </Offcanvas.Body>
                </Offcanvas>
        </>
    );
}

export default NavLateral;