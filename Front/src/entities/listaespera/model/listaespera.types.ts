export interface ListaEspera {
  id: number;
  clienteId: number;
  fecha: string;      // Formato "YYYY-MM-DD"
  horaInicio: string; // Formato "HH:mm:ss"
  horaFin: string;    // Formato "HH:mm:ss"
  cantidad: number;
  estadoId: number;
  observaciones?: string;
  fechaCreacion: string;
}

export interface CreateListaEsperaDto {
  clienteId: number;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  cantidad: number;
  observaciones?: string;
}

export interface UpdateEstadoListaEsperaDto {
  estadoId: number;
}
