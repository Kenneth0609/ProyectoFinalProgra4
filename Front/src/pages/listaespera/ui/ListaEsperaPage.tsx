import { 
    Box, 
    Typography, 
    Paper, 
    Alert, 
    Snackbar, 
    Grid, 
    TextField, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, 
    Button,
    InputAdornment
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { 
    useListaEsperas, 
    usePromoverAReserva, 
    useUpdateEstadoListaEspera,
} from "@/entities/listaespera";
import type { ListaEspera } from "@/entities/listaespera";
import { useClientes } from "@/entities/cliente";
import { ListaEsperaTable } from "@/widgets/listaespera-table";
import { MainLayout } from "@/widgets/main-layout";
import { useState, useMemo } from "react";

export default function ListaEsperaPage() {
  const [filterCliente, setFilterCliente] = useState('');
  const [filterFecha, setFilterFecha] = useState('');
  const [filterEstado, setFilterEstado] = useState('0'); // 0 = Todos

  const { data: listas = [], isLoading } = useListaEsperas();
  const { data: clientes = [] } = useClientes();
  const promoteMutation = usePromoverAReserva();
  const updateEstadoMutation = useUpdateEstadoListaEspera();
  
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const filteredListas = useMemo(() => {
    return listas
      .filter(item => {
        const matchesCliente = filterCliente === '' || 
          item.clienteId.toString().includes(filterCliente) ||
          clientes.find(c => c.id === item.clienteId)?.nombre.toLowerCase().includes(filterCliente.toLowerCase()) ||
          clientes.find(c => c.id === item.clienteId)?.apellido.toLowerCase().includes(filterCliente.toLowerCase());
        
        const matchesFecha = filterFecha === '' || item.fecha === filterFecha;
        
        const matchesEstado = filterEstado === '0' || item.estadoId.toString() === filterEstado;
        
        return matchesCliente && matchesFecha && matchesEstado;
      })
      .sort((a, b) => {
        // Ordenar por fecha de creación descendente (los más nuevos arriba)
        return new Date(b.fechaCreacion).getTime() - new Date(a.fechaCreacion).getTime();
      });
  }, [listas, filterCliente, filterFecha, filterEstado, clientes]);

  const handleClearFilters = () => {
    setFilterCliente('');
    setFilterFecha('');
    setFilterEstado('0');
  };

  const handlePromote = (lista: ListaEspera) => {
    const mesaIdStr = prompt(`Ingrese el ID de la mesa para promover al cliente #${lista.clienteId}:`);
    if (!mesaIdStr) return;

    const mesaId = parseInt(mesaIdStr);
    if (isNaN(mesaId)) {
        alert("ID de mesa inválido.");
        return;
    }

    promoteMutation.mutate(
      { listaEsperaId: lista.id, mesaId },
      {
        onSuccess: () => {
          setSuccess("Cliente promovido a reserva correctamente.");
        },
        onError: (err: any) => {
          setError(err.response?.data || "Error al promover a reserva.");
        },
      }
    );
  };

  const handleCancel = (id: number) => {
    if (!confirm("¿Está seguro de que desea cancelar esta entrada de la lista de espera?")) return;

    updateEstadoMutation.mutate(
      { id, dto: { estadoId: 2 } }, // 2 = Cancelada
      {
        onSuccess: () => {
          setSuccess("Entrada cancelada correctamente.");
        },
        onError: (err: any) => {
          setError(err.response?.data || "Error al cancelar la entrada.");
        }
      }
    );
  };

  const handleMarkAtendido = (id: number) => {
    updateEstadoMutation.mutate(
      { id, dto: { estadoId: 4 } }, // 4 = Atendido
      {
        onSuccess: () => {
          setSuccess("Entrada marcada como atendida.");
        },
        onError: (err: any) => {
          setError(err.response?.data || "Error al actualizar estado.");
        }
      }
    );
  };

  return (
    <MainLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1">
          Lista de Espera
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Gestione los clientes que están esperando una mesa disponible.
        </Typography>
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
                <MenuItem value="0">Todos</MenuItem>
                <MenuItem value="3">Pendiente</MenuItem>
                <MenuItem value="4">Atendido</MenuItem>
                <MenuItem value="2">Cancelado</MenuItem>
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

      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 2 }} onClose={() => setSuccess(null)}>
          {success}
        </Alert>
      )}

      <Paper sx={{ p: 2 }}>
        {filteredListas.length === 0 && !isLoading ? (
            <Box sx={{ p: 5, textAlign: 'center' }}>
                <Typography variant="h6" color="text.secondary">
                    No se encontraron registros con los filtros aplicados.
                </Typography>
                <Button sx={{ mt: 2 }} onClick={handleClearFilters}>
                    Ver toda la lista de espera
                </Button>
            </Box>
        ) : (
            <ListaEsperaTable 
                listas={filteredListas} 
                isLoading={isLoading} 
                onPromote={handlePromote}
                onCancel={handleCancel}
                onMarkAtendido={handleMarkAtendido}
            />
        )}
      </Paper>

      <Snackbar
        open={!!success}
        autoHideDuration={4000}
        onClose={() => setSuccess(null)}
        message={success}
      />
    </MainLayout>
  );
}
