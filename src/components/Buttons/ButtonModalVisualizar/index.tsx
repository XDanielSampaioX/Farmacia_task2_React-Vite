import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import visualizarRemedios from '../../../utils/visualizar';

type idType = {
  id: number
}

const Example = ({id} : idType) => {
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
      <Button variant="primary" onClick={() => handleShow(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
        </svg>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
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
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;