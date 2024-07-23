import api from "./api";

type Remedio = {
    id: number;
    nome: string;
    fabricante: string;
    protocolo_clinico: string;
    lote: string;
    fabricacao: string;
    validade: string;
};

export const fetchRemedios = async () => {
    const response = await api.get<{ remedios: Remedio[] }>("/remedios");
    return response.data.remedios;
};

export const addRemedio = async (remedio: Omit<Remedio, 'id'>) => {
    const response = await api.post<Remedio>("/remedios", remedio);
    return response.data;
};

export const updateRemedio = async (id: number, remedio: Partial<Remedio>) => {
    const response = await api.put<Remedio>(`/remedios/${id}`, remedio);
    return response.data;
};

export const deleteRemedio = async (id: number) => {
    const response = await api.delete(`/remedios/${id}`);
    return response.data;
};
