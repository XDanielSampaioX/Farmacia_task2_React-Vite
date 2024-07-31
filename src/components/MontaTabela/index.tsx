import { useEffect, useState } from "react";
import api from "../../utils/api";
import ButtonModalAtualizar from "../Buttons/ButtonModalAtualizar";
import ButtonModalEstoque from "../Buttons/ButtonModalEstoque";
import ButtonModalExcluir from "../Buttons/ButtonModalExcluir";
import ButtonModalVisualizar from "../Buttons/ButtonModalVisualizar";
import Container from "../Container";

const MontaTabela = () => {

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
    }), [];

    return (
        <table className="table table-primary table-hover table-striped">
            <thead className="text-center">
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Fabricante</th>
                    <th>Protocolo Clinico</th>
                    <th>Lote</th>
                    <th>Fabricação</th>
                    <th>Validade</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {remedios.map((medicamento) => (
                    <tr key={medicamento.id}>
                        <td>{medicamento.id}</td>
                        <td>{medicamento.nome}</td>
                        <td>{medicamento.fabricante}</td>
                        <td>{medicamento.protocolo_clinico}</td>
                        <td>{medicamento.lote}</td>
                        <td>{medicamento.fabricacao}</td>
                        <td>{medicamento.validade}</td>
                        <td>
                            <Container className="d-flex gap-1">
                                <ButtonModalVisualizar id={parseInt(medicamento.id)}/>
                                <ButtonModalAtualizar id={parseInt(medicamento.id)} />
                                <ButtonModalExcluir id={parseInt(medicamento.id)}/>
                                <ButtonModalEstoque />
                            </Container>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MontaTabela;
