const Table = ({children} : {children : React.ReactNode}) => {
    return (
        <table className="table table-striped table-primary">{children}</table>
    );
}
    
export default Table;