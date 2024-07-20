import Table from "../Tables/Table";
import TableBody from "../Tables/TableBody";
import TableHead from "../Tables/TableHead";
import TRow from "../Tables/TableRow";
import TData from "../Tables/TD";
import THead from "../Tables/TH";

const MontaTabela = () => {
    const medicamentos = [
        { id: 1, nome: "Paracetamol", fabricante: "Medley", protocolo: "Analgésico", lote: "A123", fabricacao: "2023-01-01", validade: "2025-01-01", opcoes: "Editar/Excluir" },
        { id: 2, nome: "Ibuprofeno", fabricante: "Neo Química", protocolo: "Antiinflamatório", lote: "B456", fabricacao: "2023-02-01", validade: "2025-02-01", opcoes: "Editar/Excluir" },
        { id: 3, nome: "Aspirina", fabricante: "Bayer", protocolo: "Analgésico", lote: "C789", fabricacao: "2023-03-01", validade: "2025-03-01", opcoes: "Editar/Excluir" },
        { id: 4, nome: "Amoxicilina", fabricante: "EMS", protocolo: "Antibiótico", lote: "D012", fabricacao: "2023-04-01", validade: "2025-04-01", opcoes: "Editar/Excluir" },
        { id: 5, nome: "Simeticona", fabricante: "Germed Pharma", protocolo: "Antiflatulento", lote: "E345", fabricacao: "2023-05-01", validade: "2025-05-01", opcoes: "Editar/Excluir" },
        { id: 6, nome: "Losartana", fabricante: "Sanofi", protocolo: "Antihipertensivo", lote: "F678", fabricacao: "2023-06-01", validade: "2025-06-01", opcoes: "Editar/Excluir" },
        { id: 7, nome: "Omeprazol", fabricante: "Aché", protocolo: "Inibidor de bomba de prótons", lote: "G901", fabricacao: "2023-07-01", validade: "2025-07-01", opcoes: "Editar/Excluir" },
        { id: 8, nome: "Metformina", fabricante: "EMS", protocolo: "Antidiabético", lote: "H234", fabricacao: "2023-08-01", validade: "2025-08-01", opcoes: "Editar/Excluir" },
        { id: 9, nome: "Sinvastatina", fabricante: "Medley", protocolo: "Redutor de colesterol", lote: "I567", fabricacao: "2023-09-01", validade: "2025-09-01", opcoes: "Editar/Excluir" },
        { id: 10, nome: "Clonazepam", fabricante: "Genérico", protocolo: "Ansiolítico", lote: "J890", fabricacao: "2023-10-01", validade: "2025-10-01", opcoes: "Editar/Excluir" },
        { id: 1, nome: "Paracetamol", fabricante: "Medley", protocolo: "Analgésico", lote: "A123", fabricacao: "2023-01-01", validade: "2025-01-01", opcoes: "Editar/Excluir" },
        { id: 2, nome: "Ibuprofeno", fabricante: "Neo Química", protocolo: "Antiinflamatório", lote: "B456", fabricacao: "2023-02-01", validade: "2025-02-01", opcoes: "Editar/Excluir" },
        { id: 3, nome: "Aspirina", fabricante: "Bayer", protocolo: "Analgésico", lote: "C789", fabricacao: "2023-03-01", validade: "2025-03-01", opcoes: "Editar/Excluir" },
        { id: 4, nome: "Amoxicilina", fabricante: "EMS", protocolo: "Antibiótico", lote: "D012", fabricacao: "2023-04-01", validade: "2025-04-01", opcoes: "Editar/Excluir" },
        { id: 5, nome: "Simeticona", fabricante: "Germed Pharma", protocolo: "Antiflatulento", lote: "E345", fabricacao: "2023-05-01", validade: "2025-05-01", opcoes: "Editar/Excluir" },
        { id: 6, nome: "Losartana", fabricante: "Sanofi", protocolo: "Antihipertensivo", lote: "F678", fabricacao: "2023-06-01", validade: "2025-06-01", opcoes: "Editar/Excluir" },
        { id: 7, nome: "Omeprazol", fabricante: "Aché", protocolo: "Inibidor de bomba de prótons", lote: "G901", fabricacao: "2023-07-01", validade: "2025-07-01", opcoes: "Editar/Excluir" },
        { id: 8, nome: "Metformina", fabricante: "EMS", protocolo: "Antidiabético", lote: "H234", fabricacao: "2023-08-01", validade: "2025-08-01", opcoes: "Editar/Excluir" },
        { id: 9, nome: "Sinvastatina", fabricante: "Medley", protocolo: "Redutor de colesterol", lote: "I567", fabricacao: "2023-09-01", validade: "2025-09-01", opcoes: "Editar/Excluir" },
        { id: 10, nome: "Clonazepam", fabricante: "Genérico", protocolo: "Ansiolítico", lote: "J890", fabricacao: "2023-10-01", validade: "2025-10-01", opcoes: "Editar/Excluir" },
        { id: 1, nome: "Paracetamol", fabricante: "Medley", protocolo: "Analgésico", lote: "A123", fabricacao: "2023-01-01", validade: "2025-01-01", opcoes: "Editar/Excluir" },
        { id: 2, nome: "Ibuprofeno", fabricante: "Neo Química", protocolo: "Antiinflamatório", lote: "B456", fabricacao: "2023-02-01", validade: "2025-02-01", opcoes: "Editar/Excluir" },
        { id: 3, nome: "Aspirina", fabricante: "Bayer", protocolo: "Analgésico", lote: "C789", fabricacao: "2023-03-01", validade: "2025-03-01", opcoes: "Editar/Excluir" },
        { id: 4, nome: "Amoxicilina", fabricante: "EMS", protocolo: "Antibiótico", lote: "D012", fabricacao: "2023-04-01", validade: "2025-04-01", opcoes: "Editar/Excluir" },
        { id: 5, nome: "Simeticona", fabricante: "Germed Pharma", protocolo: "Antiflatulento", lote: "E345", fabricacao: "2023-05-01", validade: "2025-05-01", opcoes: "Editar/Excluir" },
        { id: 6, nome: "Losartana", fabricante: "Sanofi", protocolo: "Antihipertensivo", lote: "F678", fabricacao: "2023-06-01", validade: "2025-06-01", opcoes: "Editar/Excluir" },
        { id: 7, nome: "Omeprazol", fabricante: "Aché", protocolo: "Inibidor de bomba de prótons", lote: "G901", fabricacao: "2023-07-01", validade: "2025-07-01", opcoes: "Editar/Excluir" },
        { id: 8, nome: "Metformina", fabricante: "EMS", protocolo: "Antidiabético", lote: "H234", fabricacao: "2023-08-01", validade: "2025-08-01", opcoes: "Editar/Excluir" },
        { id: 9, nome: "Sinvastatina", fabricante: "Medley", protocolo: "Redutor de colesterol", lote: "I567", fabricacao: "2023-09-01", validade: "2025-09-01", opcoes: "Editar/Excluir" },
        { id: 10, nome: "Clonazepam", fabricante: "Genérico", protocolo: "Ansiolítico", lote: "J890", fabricacao: "2023-10-01", validade: "2025-10-01", opcoes: "Editar/Excluir" }
    ];

    return (
        <Table>
            <TableHead>
                <TRow>
                    <THead>Id</THead>
                    <THead>Nome</THead>
                    <THead>Fabricante</THead>
                    <THead>Protocolo Clinico</THead>
                    <THead>Lote</THead>
                    <THead>Fabricação</THead>
                    <THead>Validade</THead>
                    <THead>Opções</THead>
                </TRow>
            </TableHead>
            <TableBody>
                {medicamentos.map((medicamento) => (
                    <TRow key={medicamento.id}>
                        <TData>{medicamento.id}</TData>
                        <TData>{medicamento.nome}</TData>
                        <TData>{medicamento.fabricante}</TData>
                        <TData>{medicamento.protocolo}</TData>
                        <TData>{medicamento.lote}</TData>
                        <TData>{medicamento.fabricacao}</TData>
                        <TData>{medicamento.validade}</TData>
                        <TData>{medicamento.opcoes}</TData>
                    </TRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default MontaTabela;
