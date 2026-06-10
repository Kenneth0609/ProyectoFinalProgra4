import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Box, 
  Button, 
  Stack, 
  Typography, 
  TextField, 
  Autocomplete, 
  CircularProgress, 
  Alert, 
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  MenuItem
} from '@mui/material';
import { useClientes, useCreateCliente } from '@/entities/cliente';
import { useMesasDisponibles } from '@/entities/mesa';
import { useCreateReserva } from '@/entities/reserva';
import { useCreateListaEspera } from '@/entities/listaespera';
import { createReservaSchema, type CreateReservaFormValues, createClienteSimpleSchema, type CreateClienteSimpleValues } from '../model/reserva.schema';

export const CreateReservaForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useState({ fecha: '', horaInicio: '', horaFin: '' });
  const [isSearching, setIsSearching] = useState(false);
  const [listaEsperaSuccess, setListaEsperaSuccess] = useState(false);

  const { data: clientes = [], isLoading: loadingClientes } = useClientes();
  const { data: mesasDisponibles = [], isLoading: loadingMesas, isError: errorMesas } = useMesasDisponibles(
    { ...searchParams }, 
    isSearching
  );
  
  const createReservaMutation = useCreateReserva();
  const createClienteMutation = useCreateCliente();
  const createListaEsperaMutation = useCreateListaEspera();

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
    reset
  } = useForm<CreateReservaFormValues>({
    resolver: zodResolver(createReservaSchema),
    defaultValues: {
      capacidad: 1,
      horaInicio: '12:00:00',
      horaFin: '14:00:00',
    }
  });

  const {
    register: registerClient,
    handleSubmit: handleSubmitClient,
    formState: { errors: clientErrors },
    reset: resetClient
  } = useForm<CreateClienteSimpleValues>({
    resolver: zodResolver(createClienteSimpleSchema),
  });

  const fechaWatch = watch('fecha');
  const horaInicioWatch = watch('horaInicio');
  const horaFinWatch = watch('horaFin');
  const capacidadWatch = watch('capacidad');
  const mesasDisponiblesPorCapacidad = mesasDisponibles.filter(
    (mesa) => mesa.capacidad >= (capacidadWatch || 1)
  );

  const handleBuscarMesas = () => {
    if (fechaWatch && horaInicioWatch && horaFinWatch) {
      setValue('mesaId', 0);
      setSearchParams({
        fecha: fechaWatch,
        horaInicio: horaInicioWatch.includes(':') && horaInicioWatch.split(':').length === 2 ? `${horaInicioWatch}:00` : horaInicioWatch,
        horaFin: horaFinWatch.includes(':') && horaFinWatch.split(':').length === 2 ? `${horaFinWatch}:00` : horaFinWatch,
      });
      setIsSearching(true);
    }
  };

  const onSubmit = async (data: CreateReservaFormValues) => {
    try {
      const formattedData = {
        ...data,
        horaInicio: data.horaInicio.length === 5 ? `${data.horaInicio}:00` : data.horaInicio,
        horaFin: data.horaFin.length === 5 ? `${data.horaFin}:00` : data.horaFin,
        estadoId: 1 // Activa
      };
      await createReservaMutation.mutateAsync(formattedData);
      reset();
      setIsSearching(false);
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Error creating reserva', error);
    }
  };

  const onSubmitClient = async (data: CreateClienteSimpleValues) => {
    try {
      const newClient = await createClienteMutation.mutateAsync(data);
      setValue('clienteId', newClient.id);
      setIsClientModalOpen(false);
      resetClient();
    } catch (error) {
      console.error('Error creating client', error);
    }
  };

  const handleAddToListaEspera = async () => {
    const clienteId = watch('clienteId');
    const fecha = watch('fecha');
    const horaInicio = watch('horaInicio');
    const horaFin = watch('horaFin');
    const capacidad = watch('capacidad');

    if (!clienteId || !fecha || !horaInicio || !horaFin) {
        alert("Por favor complete todos los campos antes de añadir a la lista de espera.");
        return;
    }

    try {
      await createListaEsperaMutation.mutateAsync({
        clienteId,
        fecha,
        horaInicio: horaInicio.length === 5 ? `${horaInicio}:00` : horaInicio,
        horaFin: horaFin.length === 5 ? `${horaFin}:00` : horaFin,
        cantidad: capacidad,
        observaciones: 'Añadido desde formulario de reserva por falta de mesas.'
      });
      setListaEsperaSuccess(true);
      reset();
      setIsSearching(false);
    } catch (error) {
      console.error('Error adding to waiting list', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={3}>
        <Typography variant="h6">Información de la Reserva</Typography>
        
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
          <Controller
            name="clienteId"
            control={control}
            render={({ field }) => (
              <Autocomplete
                {...field}
                fullWidth
                options={clientes}
                getOptionLabel={(option) => `${option.nombre} ${option.apellido} (${option.cedula})`}
                loading={loadingClientes}
                value={clientes.find(c => c.id === field.value) || null}
                onChange={(_, newValue) => field.onChange(newValue?.id || 0)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Cliente"
                    error={!!errors.clienteId}
                    helperText={errors.clienteId?.message}
                  />
                )}
              />
            )}
          />
          <Button 
            variant="outlined" 
            sx={{ height: 56 }} 
            onClick={() => setIsClientModalOpen(true)}
          >
            Nuevo
          </Button>
        </Box>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              {...register('fecha')}
              label="Fecha"
              type="date"
              fullWidth
              slotProps={{ inputLabel: { shrink: true } }}
              error={!!errors.fecha}
              helperText={errors.fecha?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              {...register('horaInicio')}
              label="Hora Inicio"
              type="time"
              fullWidth
              slotProps={{ 
                inputLabel: { shrink: true },
                htmlInput: { step: 300 }
              }}
              error={!!errors.horaInicio}
              helperText={errors.horaInicio?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              {...register('horaFin')}
              label="Hora Fin"
              type="time"
              fullWidth
              slotProps={{ 
                inputLabel: { shrink: true },
                htmlInput: { step: 300 }
              }}
              error={!!errors.horaFin}
              helperText={errors.horaFin?.message}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <TextField
            {...register('capacidad', { valueAsNumber: true })}
            label="Personas"
            type="number"
            sx={{ width: 120 }}
            error={!!errors.capacidad}
            helperText={errors.capacidad?.message}
          />
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={handleBuscarMesas}
            disabled={!fechaWatch || !horaInicioWatch || !horaFinWatch}
          >
            Buscar Mesas Disponibles
          </Button>
        </Box>

        <Divider />

        <Typography variant="h6">Selección de Mesa</Typography>
        
        {isSearching && loadingMesas && <CircularProgress size={24} />}
        
        {isSearching && !loadingMesas && mesasDisponiblesPorCapacidad.length === 0 && (
          <Stack spacing={2}>
            <Alert severity="warning">No hay mesas disponibles para el horario seleccionado.</Alert>
            <Button 
                variant="outlined" 
                color="warning" 
                onClick={handleAddToListaEspera}
                disabled={createListaEsperaMutation.isPending}
            >
                {createListaEsperaMutation.isPending ? 'Añadiendo...' : 'Añadir a Lista de Espera'}
            </Button>
          </Stack>
        )}

        {listaEsperaSuccess && (
            <Alert severity="success" sx={{ mb: 2 }} onClose={() => setListaEsperaSuccess(false)}>
                ¡Cliente añadido a la lista de espera con éxito!
            </Alert>
        )}

        {errorMesas && <Alert severity="error">Error al consultar disponibilidad.</Alert>}

        {isSearching && mesasDisponiblesPorCapacidad.length > 0 && (
          <Controller
            name="mesaId"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                label="Mesa"
                fullWidth
                error={!!errors.mesaId}
                helperText={errors.mesaId?.message}
                onChange={(e) => field.onChange(Number(e.target.value))}
              >
                {mesasDisponiblesPorCapacidad.map((mesa) => (
                  <MenuItem key={mesa.id} value={mesa.id}>
                    Mesa {mesa.numero} (Capacidad: {mesa.capacidad}) - Zona ID: {mesa.zonaId}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        )}

        {createReservaMutation.isError && (
          <Alert severity="error">
            {(createReservaMutation.error as any)?.response?.data || 'Error al crear la reserva'}
          </Alert>
        )}

        <Button 
          type="submit" 
          variant="contained" 
          size="large" 
          fullWidth
          disabled={createReservaMutation.isPending}
        >
          {createReservaMutation.isPending ? 'Creando...' : 'Confirmar Reserva'}
        </Button>
      </Stack>

      {/* Modal Nuevo Cliente */}
      <Dialog open={isClientModalOpen} onClose={() => setIsClientModalOpen(false)}>
        <DialogTitle>Registrar Nuevo Cliente</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ pt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              {...registerClient('nombre')}
              label="Nombre"
              fullWidth
              error={!!clientErrors.nombre}
              helperText={clientErrors.nombre?.message}
            />
            <TextField
              {...registerClient('apellido')}
              label="Apellido"
              fullWidth
              error={!!clientErrors.apellido}
              helperText={clientErrors.apellido?.message}
            />
            <TextField
              {...registerClient('cedula', { valueAsNumber: true })}
              label="Cédula"
              type="number"
              fullWidth
              error={!!clientErrors.cedula}
              helperText={clientErrors.cedula?.message}
            />
            <TextField
              {...registerClient('telefono', { valueAsNumber: true })}
              label="Teléfono"
              type="number"
              fullWidth
              error={!!clientErrors.telefono}
              helperText={clientErrors.telefono?.message}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsClientModalOpen(false)}>Cancelar</Button>
          <Button 
            onClick={handleSubmitClient(onSubmitClient)} 
            variant="contained"
            disabled={createClienteMutation.isPending}
          >
            {createClienteMutation.isPending ? 'Guardando...' : 'Guardar'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
