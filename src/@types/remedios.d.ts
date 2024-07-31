type remedios = {
    id: string;
    nome: string;
    fabricante: string;
    protocolo_clinico: string;
    lote: string;
    fabricacao: string;
    validade: string;
}

type Container = {
    children: React.ReactNode
    className?: string
}