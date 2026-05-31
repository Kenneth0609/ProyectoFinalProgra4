export type Reserva = {
  id: number;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  capacidad: number;
  clienteId: number;
  mesaId: number;
  estadoId: number;
  estado: string;
};

export type ReservaCreateRequest = {
  fecha: string;
  horaInicio: string;
  horaFin: string;
  capacidad: number;
  clienteId: number;
  mesaId: number;
  estadoId: number;
};

export type ReservaEstadoUpdateRequest = {
  id: number;
  estadoId: number;
};
