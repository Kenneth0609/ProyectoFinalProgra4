import { httpClient } from '@/shared/api/httpClient';
import type { Reserva, ReservaCreateRequest, ReservaEstadoUpdateRequest } from '../model/reserva.types';

export const reservaApi = {
  getReservas: async (): Promise<Reserva[]> => {
    const response = await httpClient.get<Reserva[]>('/Reservas');
    return response.data;
  },

  createReserva: async (reserva: ReservaCreateRequest): Promise<Reserva> => {
    const response = await httpClient.post<Reserva>('/Reservas', reserva);
    return response.data;
  },

  getReservasByCliente: async (clienteId: number): Promise<Reserva[]> => {
    const response = await httpClient.get<Reserva[]>(`/Reservas/cliente/${clienteId}`);
    return response.data;
  },

  updateEstadoReserva: async ({ id, estadoId }: ReservaEstadoUpdateRequest): Promise<Reserva> => {
    const response = await httpClient.put<Reserva>(`/Reservas/${id}/estado/${estadoId}`);
    return response.data;
  },
};
