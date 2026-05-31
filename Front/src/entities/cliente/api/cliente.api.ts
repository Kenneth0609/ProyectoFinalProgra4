import { httpClient } from '@/shared/api/httpClient';
import type { Cliente, ClienteCreateRequest } from '../model/cliente.types';

export const clienteApi = {
  getClientes: async (): Promise<Cliente[]> => {
    const response = await httpClient.get<Cliente[]>('/Clientes');
    return response.data;
  },

  createCliente: async (cliente: ClienteCreateRequest): Promise<Cliente> => {
    const response = await httpClient.post<Cliente>('/Clientes', cliente);
    return response.data;
  },

  getClienteById: async (id: number): Promise<Cliente> => {
    const response = await httpClient.get<Cliente>(`/Clientes/${id}`);
    return response.data;
  },
};
