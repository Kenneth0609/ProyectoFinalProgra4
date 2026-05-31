import { useState } from 'react';
import { Box, Typography, Stack, Paper, Alert, CircularProgress, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { MainLayout } from '@/widgets/main-layout';
import { ReservaTable } from '@/widgets/reserva-table';
import { useReservas } from '@/entities/reserva';
import { CreateReservaForm } from '@/features/manage-reservations';

export const ReservasPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { data: reservas = [], isLoading, error } = useReservas();

  return (
    <MainLayout>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Gestión de Reservas
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Control y seguimiento de todas las reservas del restaurante.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />} 
          onClick={() => setIsFormOpen(true)}
        >
          Nueva Reserva
        </Button>
      </Box>

      {error ? (
        <Alert severity="error" sx={{ mb: 3 }}>
          Error al cargar las reservas. Por favor, intenta de nuevo más tarde.
        </Alert>
      ) : null}

      <Stack spacing={3}>
        <Paper sx={{ p: 0 }}>
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
              <CircularProgress />
            </Box>
          ) : (
            <ReservaTable reservas={reservas} isLoading={isLoading} />
          )}
        </Paper>
      </Stack>

      <Dialog 
        open={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Crear Nueva Reserva</DialogTitle>
        <DialogContent dividers>
          <CreateReservaForm onSuccess={() => setIsFormOpen(false)} />
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};
