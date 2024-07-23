import { Button } from "react-bootstrap";

type ButtonWarning = {
    children: React.ReactNode
    onClick?: () => void
}

const ButtonWarning = ({children, onClick} : ButtonWarning) => {

    return (
        <>
            <Button className="btn btn-warning" onClick={onClick}> {children}</Button>
        </>
    )
}

export default ButtonWarning;