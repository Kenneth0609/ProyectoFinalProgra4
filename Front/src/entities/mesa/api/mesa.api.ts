import { httpClient } from '@/shared/api/httpClient';
import type { Mesa, MesaCreateRequest, MesaDisponibleParams } from '../model/mesa.types';

export const mesaApi = {
  getMesas: async (): Promise<Mesa[]> => {
    const response = await httpClient.get<Mesa[]>('/Mesas');
    return response.data;
  },

  createMesa: async (mesa: MesaCreateRequest): Promise<Mesa> => {
    const response = await httpClient.post<Mesa>('/Mesas', mesa);
    return response.data;
  },

  getMesasDisponibles: async (params: MesaDisponibleParams): Promise<Mesa[]> => {
    const { fecha, horaInicio, horaFin } = params;
    const response = await httpClient.get<Mesa[]>(`/Mesas/disponibles/${fecha}/${horaInicio}/${horaFin}`);
    return response.data;
  },
};
