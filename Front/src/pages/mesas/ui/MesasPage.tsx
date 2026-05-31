import { Box, Typography, Stack, Paper, Alert, CircularProgress } from '@mui/material';
import { MainLayout } from '@/widgets/main-layout';
import { MesaTable } from '@/widgets/mesa-table';
import { useMesas } from '@/entities/mesa';

export const MesasPage = () => {
  const { data: mesas = [], isLoading, error } = useMesas();

  return (
    <MainLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gestión de Mesas
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Visualiza y administra las mesas del restaurante.
        </Typography>
      </Box>

      {error ? (
        <Alert severity="error" sx={{ mb: 3 }}>
          Error al cargar las mesas. Por favor, intenta de nuevo más tarde.
        </Alert>
      ) : null}

      <Stack spacing={3}>
        <Paper sx={{ p: 0 }}>
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
              <CircularProgress />
            </Box>
          ) : (
            <MesaTable mesas={mesas} isLoading={isLoading} />
          )}
        </Paper>
      </Stack>
    </MainLayout>
  );
};
