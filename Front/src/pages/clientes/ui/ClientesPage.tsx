import { Box, Typography, Stack, Paper, Alert, CircularProgress } from '@mui/material';
import { MainLayout } from '@/widgets/main-layout';
import { ClienteTable } from '@/widgets/cliente-table';
import { useClientes } from '@/entities/cliente';

export const ClientesPage = () => {
  const { data: clientes = [], isLoading, error } = useClientes();

  return (
    <MainLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gestión de Clientes
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Visualiza y administra los clientes registrados en el sistema.
        </Typography>
      </Box>

      {error ? (
        <Alert severity="error" sx={{ mb: 3 }}>
          Error al cargar los clientes. Por favor, intenta de nuevo más tarde.
        </Alert>
      ) : null}

      <Stack spacing={3}>
        <Paper sx={{ p: 0 }}>
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
              <CircularProgress />
            </Box>
          ) : (
            <ClienteTable clientes={clientes} isLoading={isLoading} />
          )}
        </Paper>
      </Stack>
    </MainLayout>
  );
};
