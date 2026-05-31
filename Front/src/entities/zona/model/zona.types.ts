export type Zona = {
  id: number;
  nombre: string;
  disponibilidad: boolean;
};

export type ZonaCreateRequest = {
  nombre: string;
  disponibilidad: boolean;
};
