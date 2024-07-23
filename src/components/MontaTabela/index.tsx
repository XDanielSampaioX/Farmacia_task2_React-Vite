import { useEffect, useState } from "react";
import DivComp from "../DivComp";
import Table from "../Tables/Table";
import TableBody from "../Tables/TableBody";
import TableHead from "../Tables/TableHead";
import TRow from "../Tables/TableRow";
import TData from "../Tables/TD";
import THead from "../Tables/TH";
import api from "../../utils/api";
import ButtonVisualizar from "../Buttons/ButtonSVG/ButtonVisualizar";
import ButtonEditar from "../Buttons/ButtonSVG/ButtonEditar";
import ButtonExcluir from "../Buttons/ButtonSVG/ButtonExcluir";
import ButtonEstoque from "../Buttons/ButtonSVG/ButtonEstoque";

const MontaTabela = () => {

    type remedios = {
        id: string;
        nome: string;
        fabricante: string;
        protocolo_clinico: string;
        lote: string;
        fabricacao: string;
        validade: string;
    }
    

    const [remedios, setRemedios] = useState<remedios[]>([]);

    useEffect(() => {
        api.get(`/`).then((response) => {
            setRemedios(response.data|| [])
        }).catch(error => {
            console.error("Error ao buscar remedios: " , error || []);
        });
    }
)

console.log (api.get)

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
                {remedios.map((medicamento) => (
                    <TRow key={medicamento.id}>
                        <TData>{medicamento.id}</TData>
                        <TData>{medicamento.nome}</TData>
                        <TData>{medicamento.fabricante}</TData>
                        <TData>{medicamento.protocolo_clinico}</TData>
                        <TData>{medicamento.lote}</TData>
                        <TData>{medicamento.fabricacao}</TData>
                        <TData>{medicamento.validade}</TData>
                        <TData>
                            <DivComp>
                                <ButtonVisualizar />
                                <ButtonEditar />
                                <ButtonExcluir />
                                <ButtonEstoque />
                            </DivComp>
                        </TData>
                    </TRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default MontaTabela;
