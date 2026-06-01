import { useState, useMemo } from 'react';
import { 
  Box, 
  Typography, 
  Stack, 
  Paper, 
  Alert, 
  CircularProgress, 
  Grid, 
  TextField, 
  InputAdornment, 
  Button 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { MainLayout } from '@/widgets/main-layout';
import { ClienteTable } from '@/widgets/cliente-table';
import { useClientes } from '@/entities/cliente';

export const ClientesPage = () => {
  const [searchTerm, setSearchText] = useState('');
  const [filterCedula, setFilterCedula] = useState('');
  const [filterTelefono, setFilterTelefono] = useState('');

  const { data: clientes = [], isLoading, error } = useClientes();

  const filteredClientes = useMemo(() => {
    return clientes
      .filter(cliente => {
        const matchesSearch = searchTerm === '' || 
          cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cliente.apellido.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCedula = filterCedula === '' || 
          cliente.cedula.toString().includes(filterCedula);
        
        const matchesTelefono = filterTelefono === '' || 
          cliente.telefono.toString().includes(filterTelefono);

        return matchesSearch && matchesCedula && matchesTelefono;
      })
      .sort((a, b) => a.nombre.localeCompare(b.nombre));
  }, [clientes, searchTerm, filterCedula, filterTelefono]);

  const handleClearFilters = () => {
    setSearchText('');
    setFilterCedula('');
    setFilterTelefono('');
  };

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

      {/* Sección de Filtros */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Nombre o Apellido"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchText(e.target.value)}
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
              label="Cédula"
              placeholder="Filtrar por cédula..."
              value={filterCedula}
              onChange={(e) => setFilterCedula(e.target.value)}
              size="small"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <TextField
              fullWidth
              label="Teléfono"
              placeholder="Filtrar por teléfono..."
              value={filterTelefono}
              onChange={(e) => setFilterTelefono(e.target.value)}
              size="small"
            />
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
            <>
              {filteredClientes.length === 0 ? (
                <Box sx={{ p: 5, textAlign: 'center' }}>
                  <Typography variant="h6" color="text.secondary">
                    No se encontraron clientes con los filtros aplicados.
                  </Typography>
                  <Button sx={{ mt: 2 }} onClick={handleClearFilters}>
                    Ver todos los clientes
                  </Button>
                </Box>
              ) : (
                <ClienteTable clientes={filteredClientes} isLoading={isLoading} />
              )}
            </>
          )}
        </Paper>
      </Stack>
    </MainLayout>
  );
};
