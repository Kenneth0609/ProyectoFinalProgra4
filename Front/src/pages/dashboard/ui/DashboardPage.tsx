import { Box, Typography, Grid, Paper, CircularProgress } from '@mui/material';
import { MainLayout } from '@/widgets/main-layout';
import { useMesas } from '@/entities/mesa';
import { useZonas } from '@/entities/zona';
import { useClientes } from '@/entities/cliente';
import { useReservas } from '@/entities/reserva';

export const DashboardPage = () => {
  const { data: mesas = [], isLoading: loadingMesas } = useMesas();
  const { data: zonas = [], isLoading: loadingZonas } = useZonas();
  const { data: clientes = [], isLoading: loadingClientes } = useClientes();
  const { data: reservas = [], isLoading: loadingReservas } = useReservas();

  const metrics = [
    { 
      label: 'Reservas Hoy', 
      value: reservas.length, 
      loading: loadingReservas,
      description: 'Reservas registradas' 
    },
    { 
      label: 'Clientes', 
      value: clientes.length, 
      loading: loadingClientes,
      description: 'Clientes registrados' 
    },
    { 
      label: 'Total Mesas', 
      value: mesas.length, 
      loading: loadingMesas,
      description: 'Mesas registradas en el sistema' 
    },
    { 
      label: 'Total Zonas', 
      value: zonas.length, 
      loading: loadingZonas,
      description: 'Zonas configuradas' 
    },
    { 
      label: 'Usuarios', 
      value: 3, // Mock por ahora
      loading: false,
      description: 'Usuarios activos' 
    },
  ];

  return (
    <MainLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Vista general del sistema y estadísticas principales.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {metrics.map((metric, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Typography variant="h6" gutterBottom color="text.secondary">
                {metric.label}
              </Typography>
              {metric.loading ? (
                <CircularProgress size={24} sx={{ my: 1 }} />
              ) : (
                <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>
                  {metric.value}
                </Typography>
              )}
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {metric.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};
