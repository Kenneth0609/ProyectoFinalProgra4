import { useMemo } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { Box, Chip, IconButton, Tooltip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { AppDataTable } from '@/shared/ui/AppDataTable';
import { useUpdateEstadoReserva, type Reserva } from '@/entities/reserva';

type ReservaTableProps = {
  reservas: Reserva[];
  isLoading?: boolean;
};

const columnHelper = createColumnHelper<Reserva>();

export const ReservaTable = ({ reservas, isLoading }: ReservaTableProps) => {
  const updateEstadoMutation = useUpdateEstadoReserva();

  const handleUpdateStatus = (id: number, estadoId: number) => {
    updateEstadoMutation.mutate({ id, estadoId });
  };

  const columns = useMemo(() => [
    columnHelper.accessor('id', {
      header: 'ID',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('fecha', {
      header: 'Fecha',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('horaInicio', {
      header: 'Hora Inicio',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('horaFin', {
      header: 'Hora Fin',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('capacidad', {
      header: 'Pax',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('clienteId', {
      header: 'Cliente ID',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('mesaId', {
      header: 'Mesa ID',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('estado', {
      header: 'Estado',
      cell: (info) => {
        const estado = info.getValue();
        let color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' = 'default';
        
        if (estado === 'Activa' || estado === 'Confirmada') color = 'success';
        if (estado === 'Pendiente') color = 'warning';
        if (estado === 'Cancelada') color = 'error';
        
        return <Chip label={estado} color={color} size="small" />;
      },
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Acciones',
      cell: (info) => {
        const reserva = info.row.original;
        const isCancelada = reserva.estado === 'Cancelada';
        const isActiva = reserva.estado === 'Activa';

        return (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {!isActiva && !isCancelada && (
              <Tooltip title="Confirmar">
                <IconButton 
                  color="success" 
                  size="small"
                  onClick={() => handleUpdateStatus(reserva.id, 1)}
                  disabled={updateEstadoMutation.isPending}
                >
                  <CheckCircleIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
            {!isCancelada && (
              <Tooltip title="Cancelar">
                <IconButton 
                  color="error" 
                  size="small"
                  onClick={() => handleUpdateStatus(reserva.id, 2)}
                  disabled={updateEstadoMutation.isPending}
                >
                  <CancelIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        );
      },
    }),
  ], [updateEstadoMutation.isPending]);

  return (
    <AppDataTable
      data={reservas}
      columns={columns}
      isLoading={isLoading}
    />
  );
};
