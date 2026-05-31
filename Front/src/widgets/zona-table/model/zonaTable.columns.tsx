import { createColumnHelper } from '@tanstack/react-table';
import type { Zona } from '@/entities/zona';
import { Chip } from '@mui/material';

const columnHelper = createColumnHelper<Zona>();

export const zonaTableColumns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('nombre', {
    header: 'Nombre de Zona',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('disponibilidad', {
    header: 'Estado',
    cell: (info) => (
      <Chip 
        label={info.getValue() ? 'Disponible' : 'No Disponible'} 
        color={info.getValue() ? 'success' : 'error'} 
        size="small" 
      />
    ),
  }),
];
