import { createColumnHelper } from '@tanstack/react-table';
import type { Mesa } from '@/entities/mesa';

const columnHelper = createColumnHelper<Mesa>();

export const mesaTableColumns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('numero', {
    header: 'Número de Mesa',
    cell: (info) => `Mesa ${info.getValue()}`,
  }),
  columnHelper.accessor('capacidad', {
    header: 'Capacidad',
    cell: (info) => `${info.getValue()} personas`,
  }),
  columnHelper.accessor('zonaId', {
    header: 'ID de Zona',
    cell: (info) => info.getValue(),
  }),
];
