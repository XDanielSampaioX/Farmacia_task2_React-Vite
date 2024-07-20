import { Button } from "react-bootstrap";


const ButtonPrimary = ({children} : {children : React.ReactNode}) => {

    return (
        <>
            <Button className="btn btn-danger"> {children}</Button>
        </>
    )
}

export default ButtonPrimary;