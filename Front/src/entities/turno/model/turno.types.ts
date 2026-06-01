export interface Turno {
  id: number;
  nombre: string;
  horaInicio: string; // Formato "HH:mm:ss"
  horaFin: string;    // Formato "HH:mm:ss"
  activo: boolean;
}

export interface CreateTurnoDto {
  nombre: string;
  horaInicio: string;
  horaFin: string;
  activo: boolean;
}
