import api from "./api";

const visualizarRemedios = async (id: number) => {
    try {
      const response = await api.get(`/remedios/${id}`); // Por exemplo, buscar um remédio específico pelo ID
      return response.data;
    } catch (error) {
      throw new Error('Erro ao buscar os dados do remédio');
    }
  };
  
  export default visualizarRemedios;