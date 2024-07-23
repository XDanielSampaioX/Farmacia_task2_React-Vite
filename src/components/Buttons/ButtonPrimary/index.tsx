import { Button } from "react-bootstrap";

type ButtonPrimary = {
    children: React.ReactNode
    onClick?: () => void
}

const ButtonPrimary = ({children, onClick} : ButtonPrimary) => {
    return (
        <>
            <Button className="btn btn-primary" onClick={onClick}> {children}</Button>
        </>
    )
}

export default ButtonPrimary;