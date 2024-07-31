const Container = ({ children, className }: Container) => {
    return (
        <>
            <div className= {className}>{children}</div>
        </>
    )
}

export default Container;