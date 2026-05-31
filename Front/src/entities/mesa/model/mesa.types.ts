export type Mesa = {
  id: number;
  numero: number;
  capacidad: number;
  zonaId: number;
};

export type MesaCreateRequest = {
  numero: number;
  capacidad: number;
  zonaId: number;
};

export type MesaDisponibleParams = {
  fecha: string;
  horaInicio: string;
  horaFin: string;
};

export type MesaDisponibilidadResponse = {
  disponible: boolean;
  mensaje: string;
};
