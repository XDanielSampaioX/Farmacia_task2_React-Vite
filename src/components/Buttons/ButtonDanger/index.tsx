import { Button } from "react-bootstrap";

type ButtonDanger = {
    children: React.ReactNode
    onClick?: () => void
}

const ButtonDanger = ({children, onClick} : ButtonDanger) => {

    return (
        <>
            <Button className="btn btn-danger" onClick={onClick}> {children}</Button>
        </>
    )
}

export default ButtonDanger;