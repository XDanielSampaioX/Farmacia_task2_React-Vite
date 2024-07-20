import './index.css'

const Nome = ({children} : {children : React.ReactNode}) => {
    return (
        <>
            <h2><strong>{children}</strong></h2>
        </>
    )
}

export default Nome;

