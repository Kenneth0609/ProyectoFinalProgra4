import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { turnoApi } from "../api/turno.api";
import type { CreateTurnoDto } from "../model/turno.types";

export const useTurnos = () => {
  return useQuery({
    queryKey: ["turnos"],
    queryFn: turnoApi.getAll,
  });
};

export const useTurno = (id: number) => {
  return useQuery({
    queryKey: ["turnos", id],
    queryFn: () => turnoApi.getById(id),
    enabled: !!id,
  });
};

export const useCreateTurno = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (turno: CreateTurnoDto) => turnoApi.create(turno),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["turnos"] });
    },
  });
};

export const useUpdateTurno = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, turno }: { id: number; turno: CreateTurnoDto }) =>
      turnoApi.update(id, turno),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["turnos"] });
    },
  });
};

export const useDeleteTurno = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => turnoApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["turnos"] });
    },
  });
};
