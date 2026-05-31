import { httpClient } from '@/shared/api/httpClient';
import type { Zona } from '../model/zona.types';

export const zonaApi = {
  getZonas: async (): Promise<Zona[]> => {
    const response = await httpClient.get<Zona[]>('/Zonas');
    return response.data;
  },
};
