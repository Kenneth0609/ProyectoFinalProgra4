export type Cliente = {
  id: number;
  nombre: string;
  apellido: string;
  telefono: number;
  cedula: number;
};

export type ClienteCreateRequest = {
  nombre: string;
  apellido: string;
  telefono: number;
  cedula: number;
};
