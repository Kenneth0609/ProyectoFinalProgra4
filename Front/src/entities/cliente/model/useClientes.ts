import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { clienteApi } from '../api/cliente.api';
import type { ClienteCreateRequest } from './cliente.types';

export const useClientes = () => {
  return useQuery({
    queryKey: ['clientes'],
    queryFn: clienteApi.getClientes,
  });
};

export const useCreateCliente = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newCliente: ClienteCreateRequest) => clienteApi.createCliente(newCliente),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clientes'] });
    },
  });
};
