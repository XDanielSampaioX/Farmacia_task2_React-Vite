import api from "./api";

const atualizarRemedios = async (id : number, updateRemedios : remedios) => {
    try {
      const response = await api.put(`/remedios/${id}`,updateRemedios);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao buscar os dados do remédio');
    }
  };
  
  export default atualizarRemedios;