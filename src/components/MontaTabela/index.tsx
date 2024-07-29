import { useEffect, useState } from "react";
import api from "../../utils/api";
import DivComp from "../DivComp";
import Table from "../Tables/Table";
import TableBody from "../Tables/TableBody";
import TableHead from "../Tables/TableHead";
import TRow from "../Tables/TableRow";
import TData from "../Tables/TD";
import THead from "../Tables/TH";
import ButtonModalVisualizar from "../Buttons/ButtonModalVisualizar";
import ButtonModalAtualizar from "../Buttons/ButtonModalAtualizar";
import ButtonModalExcluir from "../Buttons/ButtonModalExcluir";
import ButtonModalEstoque from "../Buttons/ButtonModalEstoque";

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

    // useEffect: Manipula o ciclo de vida do comnponente, e tambem executa assim que o componente carregar ou sair da tela.
    useEffect(() => {
        const resultadoRemedios = async () => {
            try {
                const response = await api.get(`/remedios`);
                setRemedios(response.data || [])
            } catch (error) {
                alert("API não encontrada")
            }
        }
        resultadoRemedios();
    });

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
                                <ButtonModalVisualizar />
                                <ButtonModalAtualizar />
                                <ButtonModalExcluir />
                                <ButtonModalEstoque />
                            </DivComp>
                        </TData>
                    </TRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default MontaTabela;
