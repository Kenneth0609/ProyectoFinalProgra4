import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { reservaApi } from '../api/reserva.api';
import type { ReservaCreateRequest, ReservaEstadoUpdateRequest } from './reserva.types';

export const useReservas = () => {
  return useQuery({
    queryKey: ['reservas'],
    queryFn: reservaApi.getReservas,
  });
};

export const useCreateReserva = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newReserva: ReservaCreateRequest) => reservaApi.createReserva(newReserva),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservas'] });
    },
  });
};

export const useUpdateEstadoReserva = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: ReservaEstadoUpdateRequest) => reservaApi.updateEstadoReserva(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservas'] });
    },
  });
};
