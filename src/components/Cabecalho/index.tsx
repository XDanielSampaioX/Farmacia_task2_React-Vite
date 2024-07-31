import { Button } from "react-bootstrap";
import Container from "../Container";
import InputRemedio from "../InputRemedio";
import LogoFarma from "../LogoFarma";
import Nome from "../Nome";


const Header = () => {
    return (
            <Container className="container-lg d-sm-flex justify-content-evenly bg-color p-3">
                <Container className='w-50 d-flex align-items-center gap-2'>
                    <Nome >Farma4Life</Nome>
                    <LogoFarma />
                </Container>
                <Container className="d-sm-flex align-items-center gap-1">
                    Buscar remédios:
                    <InputRemedio />
                    <Button variant="primary">Buscar</Button>
                </Container>
                <Container className="d-sm-flex align-items-center gap-2">
                    <Button variant="primary">Cadastrar</Button>
                </Container>
            </Container>
    )
}

export default Header;