import ButtonPrimary from "../Buttons/ButtonPrimary";
import DivComp from "../DivComp";
import InputRemedio from "../InputRemedio";
import LogoFarma from "../LogoFarma";
import Nome from "../Nome";


const Header = () => {
    return (
            <DivComp className="container-lg d-sm-flex justify-content-evenly bg-color p-3">
                <DivComp className='w-50 d-flex align-items-center gap-2'>
                    <Nome >Farma4Life</Nome>
                    <LogoFarma />
                </DivComp>
                <DivComp className="d-sm-flex align-items-center gap-1">
                    Buscar remédios:
                    <InputRemedio />
                    <ButtonPrimary>Buscar</ButtonPrimary>
                </DivComp>
                <DivComp className="d-sm-flex align-items-center gap-2">
                    <ButtonPrimary>Cadastrar</ButtonPrimary>
                </DivComp>
            </DivComp>
    )
}

export default Header;