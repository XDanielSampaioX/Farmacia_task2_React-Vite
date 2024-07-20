import { Button } from "react-bootstrap";


const ButtonPrimary = ({children} : {children : React.ReactNode}) => {

    return (
        <>
            <Button className="btn btn-sucess"> {children}</Button>
        </>
    )
}

export default ButtonPrimary;