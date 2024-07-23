import { Button } from "react-bootstrap";

type ButtonSuccess = {
    children: React.ReactNode
    onClick?: () => void
}

const ButtonSuccess = ({children, onClick} : ButtonSuccess) => {

    return (
        <>
            <Button className="btn btn-success" onClick={onClick}> {children}</Button>
        </>
    )
}

export default ButtonSuccess;