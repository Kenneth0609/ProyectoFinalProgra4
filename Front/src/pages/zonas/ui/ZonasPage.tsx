import { Box, Typography, Stack, Paper, Alert, CircularProgress } from '@mui/material';
import { MainLayout } from '@/widgets/main-layout';
import { ZonaTable } from '@/widgets/zona-table';
import { useZonas } from '@/entities/zona';

export const ZonasPage = () => {
  const { data: zonas = [], isLoading, error } = useZonas();

  return (
    <MainLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gestión de Zonas
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Administra las diferentes zonas del restaurante.
        </Typography>
      </Box>

      {error ? (
        <Alert severity="error" sx={{ mb: 3 }}>
          Error al cargar las zonas. Por favor, intenta de nuevo más tarde.
        </Alert>
      ) : null}

      <Stack spacing={3}>
        <Paper sx={{ p: 0 }}>
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
              <CircularProgress />
            </Box>
          ) : (
            <ZonaTable zonas={zonas} isLoading={isLoading} />
          )}
        </Paper>
      </Stack>
    </MainLayout>
  );
};
