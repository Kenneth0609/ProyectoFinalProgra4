import { httpClient } from "../../../shared/api/httpClient";
import type { ListaEspera, CreateListaEsperaDto, UpdateEstadoListaEsperaDto } from "../model/listaespera.types";

export const listaEsperaApi = {
  getAll: async (): Promise<ListaEspera[]> => {
    const response = await httpClient.get<ListaEspera[]>("/ListaEspera");
    return response.data;
  },

  getById: async (id: number): Promise<ListaEspera> => {
    const response = await httpClient.get<ListaEspera>(`/ListaEspera/${id}`);
    return response.data;
  },

  create: async (lista: CreateListaEsperaDto): Promise<ListaEspera> => {
    const response = await httpClient.post<ListaEspera>("/ListaEspera", lista);
    return response.data;
  },

  update: async (id: number, lista: CreateListaEsperaDto): Promise<ListaEspera> => {
    const response = await httpClient.put<ListaEspera>(`/ListaEspera/${id}`, lista);
    return response.data;
  },

  updateEstado: async (id: number, dto: UpdateEstadoListaEsperaDto): Promise<ListaEspera> => {
    const response = await httpClient.put<ListaEspera>(`/ListaEspera/${id}/estado`, dto);
    return response.data;
  },

  promover: async (listaEsperaId: number, mesaId: number): Promise<void> => {
    await httpClient.post(`/ListaEspera/${listaEsperaId}/promover/${mesaId}`);
  },
};
