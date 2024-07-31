import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import visualizarRemedios from '../../../utils/visualizar';
import atualizarRemedios from '../../../utils/atualizar';
import Container from '../../Container';

type idType = {
  id: number
}

function Example({ id }: idType) {
  const [show, setShow] = useState(false);
  const [remedioId, setRemedioId] = useState<number | null>(null);

  const [remedio, setRemedio] = useState<remedios | null>();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (remedio) {
      setRemedio({
        ...remedio,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <>
      <Button variant="success" onClick={() => handleShow(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
        </svg>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Atualizar Remedios</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {remedio ? (
            <>
              <Container className="d-flex flex-column gap-1">
                Nome: <input type="text" name='nome' value={remedio.nome} onChange={handleInputChange}/>
                fabricante: <input type="text" name='fabricante' value={remedio.fabricante} onChange={handleInputChange}/>
                Protocolo Clinico: <input type="text" name='protocolo_clinico' value={remedio.protocolo_clinico} onChange={handleInputChange}/>
                Lote: <input type="text" name='lote' value={remedio.lote} onChange={handleInputChange}/>
                Fabricacao: <input type="text" name='fabricacao' value={remedio.fabricacao} onChange={handleInputChange}/>
                Validade: <input type="text" name='validade' value={remedio.validade} onChange={handleInputChange}/>
              </Container>
            </>
          ) : (
            <p>Nenhum remédio encontrado</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={async () => {
              if (remedio) {
                try {
                  const response = await atualizarRemedios(id, remedio);
                  console.log('Dados atualizados com sucesso:', response);
                  handleClose();
                } catch (error) {
                  console.error("Falha ao atualizar");
                }
              }
            }}>Salvar</Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;