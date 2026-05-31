import { createColumnHelper } from '@tanstack/react-table';
import type { Cliente } from '@/entities/cliente';

const columnHelper = createColumnHelper<Cliente>();

export const clienteTableColumns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('nombre', {
    header: 'Nombre',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('apellido', {
    header: 'Apellido',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('telefono', {
    header: 'Teléfono',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('cedula', {
    header: 'Cédula',
    cell: (info) => info.getValue(),
  }),
];
