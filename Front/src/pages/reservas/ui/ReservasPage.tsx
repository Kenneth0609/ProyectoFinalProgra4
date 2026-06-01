import { useState, useMemo } from 'react';
import { 
  Box, 
  Typography, 
  Stack, 
  Paper, 
  Alert, 
  CircularProgress, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent,
  Grid,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  InputAdornment
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { MainLayout } from '@/widgets/main-layout';
import { ReservaTable } from '@/widgets/reserva-table';
import { useReservas } from '@/entities/reserva';
import { useClientes } from '@/entities/cliente';
import { CreateReservaForm } from '@/features/manage-reservations';

export const ReservasPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Estados para filtros
  const [filterCliente, setFilterCliente] = useState('');
  const [filterFecha, setFilterFecha] = useState('');
  const [filterEstado, setFilterEstado] = useState('Todos');

  const { data: reservas = [], isLoading, error } = useReservas();
  const { data: clientes = [] } = useClientes();

  // Lógica de filtrado local y ordenamiento
  const filteredReservas = useMemo(() => {
    return reservas
      .filter(reserva => {
        // Filtro por Cliente
        const matchesCliente = filterCliente === '' || 
          reserva.clienteId.toString().includes(filterCliente) ||
          clientes.find(c => c.id === reserva.clienteId)?.nombre.toLowerCase().includes(filterCliente.toLowerCase()) ||
          clientes.find(c => c.id === reserva.clienteId)?.apellido.toLowerCase().includes(filterCliente.toLowerCase());
        
        // Filtro por Fecha
        const matchesFecha = filterFecha === '' || reserva.fecha === filterFecha;
        
        // Filtro por Estado
        const matchesEstado = filterEstado === 'Todos' || reserva.estado === filterEstado;
        
        return matchesCliente && matchesFecha && matchesEstado;
      })
      .sort((a, b) => {
        // Ordenar por fecha descendente
        return b.fecha.localeCompare(a.fecha) || b.horaInicio.localeCompare(a.horaInicio);
      });
  }, [reservas, filterCliente, filterFecha, filterEstado, clientes]);

  const handleClearFilters = () => {
    setFilterCliente('');
    setFilterFecha('');
    setFilterEstado('Todos');
  };

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

      {/* Sección de Filtros */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Buscar Cliente"
              placeholder="Nombre, apellido o ID..."
              value={filterCliente}
              onChange={(e) => setFilterCliente(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
              size="small"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <TextField
              fullWidth
              label="Fecha"
              type="date"
              value={filterFecha}
              onChange={(e) => setFilterFecha(e.target.value)}
              slotProps={{ inputLabel: { shrink: true } }}
              size="small"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <FormControl fullWidth size="small">
              <InputLabel>Estado</InputLabel>
              <Select
                value={filterEstado}
                label="Estado"
                onChange={(e) => setFilterEstado(e.target.value)}
              >
                <MenuItem value="Todos">Todos</MenuItem>
                <MenuItem value="Activa">Activa</MenuItem>
                <MenuItem value="Pendiente">Pendiente</MenuItem>
                <MenuItem value="Cancelada">Cancelada</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 2 }}>
            <Button 
              fullWidth 
              variant="outlined" 
              startIcon={<ClearIcon />}
              onClick={handleClearFilters}
            >
              Limpiar
            </Button>
          </Grid>
        </Grid>
      </Paper>

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
            <>
              {filteredReservas.length === 0 ? (
                <Box sx={{ p: 5, textAlign: 'center' }}>
                  <Typography variant="h6" color="text.secondary">
                    No se encontraron reservas con los filtros aplicados.
                  </Typography>
                  <Button sx={{ mt: 2 }} onClick={handleClearFilters}>
                    Ver todas las reservas
                  </Button>
                </Box>
              ) : (
                <ReservaTable reservas={filteredReservas} isLoading={isLoading} />
              )}
            </>
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
