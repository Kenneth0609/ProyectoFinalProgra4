import { httpClient } from "../../../shared/api/httpClient";
import type { Turno, CreateTurnoDto } from "../model/turno.types";

export const turnoApi = {
  getAll: async (): Promise<Turno[]> => {
    const response = await httpClient.get<Turno[]>("/Turnos");
    return response.data;
  },

  getById: async (id: number): Promise<Turno> => {
    const response = await httpClient.get<Turno>(`/Turnos/${id}`);
    return response.data;
  },

  create: async (turno: CreateTurnoDto): Promise<Turno> => {
    const response = await httpClient.post<Turno>("/Turnos", turno);
    return response.data;
  },

  update: async (id: number, turno: CreateTurnoDto): Promise<Turno> => {
    const response = await httpClient.put<Turno>(`/Turnos/${id}`, turno);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await httpClient.delete(`/Turnos/${id}`);
  },

  validarHora: async (horaInicio: string, horaFin: string): Promise<boolean> => {
    const response = await httpClient.get<boolean>(`/Turnos/validar/${horaInicio}/${horaFin}`);
    return response.data;
  },
};
