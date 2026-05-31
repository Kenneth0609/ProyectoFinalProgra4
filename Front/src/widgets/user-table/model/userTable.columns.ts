import { createColumnHelper } from '@tanstack/react-table';
import type { User } from '@/entities/user';

const columnHelper = createColumnHelper<User>();

export const userTableColumns = [
  columnHelper.accessor('fullName', {
    header: 'Nombre Completo',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('email', {
    header: 'Correo Electrónico',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('role', {
    header: 'Rol',
    cell: (info) => info.getValue().toUpperCase(),
  }),
  columnHelper.accessor('status', {
    header: 'Estado',
    cell: (info) => info.getValue().toUpperCase(),
  }),
];
