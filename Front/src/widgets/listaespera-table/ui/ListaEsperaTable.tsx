import { AppDataTable } from '@/shared/ui/AppDataTable';
import type { ListaEspera } from '@/entities/listaespera';
import { createListaEsperaColumns } from '../model/listaesperaTable.columns';
import { useMemo } from 'react';

type ListaEsperaTableProps = {
  listas: ListaEspera[];
  isLoading?: boolean;
  onPromote: (lista: ListaEspera) => void;
  onCancel: (id: number) => void;
  onMarkAtendido: (id: number) => void;
};

export const ListaEsperaTable = ({ listas, isLoading, onPromote, onCancel, onMarkAtendido }: ListaEsperaTableProps) => {
  const columns = useMemo(() => createListaEsperaColumns(onPromote, onCancel, onMarkAtendido), [onPromote, onCancel, onMarkAtendido]);

  return (
    <AppDataTable
      data={listas}
      columns={columns}
      isLoading={isLoading}
    />
  );
};
