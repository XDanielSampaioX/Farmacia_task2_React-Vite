type DivComp = {
    children: React.ReactNode
    className: string
}

const DivComp = ({ children, className }: DivComp) => {
    return (
        <>
            <div className= {className}>{children}</div>
        </>
    )
}

export default DivComp;