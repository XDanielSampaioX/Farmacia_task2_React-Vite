import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import visualizarRemedios from '../../../utils/visualizar';
import excluirRemedios from '../../../utils/excluir';


type idType = {
  id: number
}

const Example = ({ id }: idType) => {
  const [show, setShow] = useState(false);
  const [remedioId, setRemedioId] = useState<number | null>(null);

  const [remedio, setRemedio] = useState<remedios | null>(null);

  const handleClose = () => setShow(false);

  // Função que será chamada ao clicar no botão, passando o ID do remédio
  const handleShow = (id: number) => {
    setRemedioId(id);
    setShow(true);
  };

  useEffect(() => {
    const fetchRemedio = async () => {
      try {
        if (remedioId === null) return;
        const remedioData = await visualizarRemedios(remedioId);
        setRemedio(remedioData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Erro ao buscar os remédios:", error.message);
        } else {
          console.error("Erro desconhecido ao buscar os remédios");
        }
      }
    };

    fetchRemedio();
  }, [remedioId]);

  return (
    <>
      <Button variant="danger" onClick={() => handleShow(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
        </svg>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Dados do Remédio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {remedio ? (
            <>
              <p>Nome: {remedio.nome}</p>
              <p>Fabricante: {remedio.fabricante}</p>
              <p>Protocolo Clinico: {remedio.protocolo_clinico}</p>
              <p>Lote: {remedio.lote}</p>
              <p>Fabricacao: {remedio.fabricacao}</p>
              <p>Validade: {remedio.validade}</p>
            </>
          ) : (
            <p>Nenhum remédio encontrado</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="danger" onClick={async () => await excluirRemedios(id)}>Excluir</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;