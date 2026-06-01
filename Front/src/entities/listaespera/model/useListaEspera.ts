import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listaEsperaApi } from "../api/listaespera.api";
import type { CreateListaEsperaDto, UpdateEstadoListaEsperaDto } from "../model/listaespera.types";

export const useListaEsperas = () => {
  return useQuery({
    queryKey: ["listaesperas"],
    queryFn: listaEsperaApi.getAll,
  });
};

export const useListaEspera = (id: number) => {
  return useQuery({
    queryKey: ["listaesperas", id],
    queryFn: () => listaEsperaApi.getById(id),
    enabled: !!id,
  });
};

export const useCreateListaEspera = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (lista: CreateListaEsperaDto) => listaEsperaApi.create(lista),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listaesperas"] });
    },
  });
};

export const useUpdateEstadoListaEspera = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, dto }: { id: number; dto: UpdateEstadoListaEsperaDto }) =>
      listaEsperaApi.updateEstado(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listaesperas"] });
    },
  });
};

export const usePromoverAReserva = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ listaEsperaId, mesaId }: { listaEsperaId: number; mesaId: number }) =>
      listaEsperaApi.promover(listaEsperaId, mesaId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listaesperas"] });
      queryClient.invalidateQueries({ queryKey: ["reservas"] });
      queryClient.invalidateQueries({ queryKey: ["mesas-disponibles"] });
    },
  });
};
