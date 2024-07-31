import api from "./api";

const excluirRemedios = async (id: number) => {
    try {
      const response = await api.delete(`/remedios/${id}`); // Por exemplo, buscar um remédio específico pelo ID
      return response.data;
    } catch (error) {
      throw new Error('Erro ao buscar os dados do remédio');
    }
  };
  
  export default excluirRemedios;