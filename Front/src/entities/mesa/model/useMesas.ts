import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { mesaApi } from '../api/mesa.api';
import type { MesaCreateRequest, MesaDisponibleParams } from './mesa.types';

export const useMesas = () => {
  return useQuery({
    queryKey: ['mesas'],
    queryFn: mesaApi.getMesas,
  });
};

export const useMesasDisponibles = (params: MesaDisponibleParams, enabled = false) => {
  return useQuery({
    queryKey: ['mesas-disponibles', params],
    queryFn: () => mesaApi.getMesasDisponibles(params),
    enabled: enabled && !!params.fecha && !!params.horaInicio && !!params.horaFin,
  });
};

export const useCreateMesa = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newMesa: MesaCreateRequest) => mesaApi.createMesa(newMesa),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mesas'] });
    },
  });
};
