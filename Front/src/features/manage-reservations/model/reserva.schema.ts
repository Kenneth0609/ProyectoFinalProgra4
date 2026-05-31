import { z } from 'zod';

export const createReservaSchema = z.object({
  clienteId: z.number().min(1, 'El cliente es requerido'),
  fecha: z.string().min(1, 'La fecha es requerida'),
  horaInicio: z.string().min(1, 'La hora de inicio es requerida'),
  horaFin: z.string().min(1, 'La hora de fin es requerida'),
  capacidad: z.number().min(1, 'La capacidad debe ser al menos 1'),
  mesaId: z.number().min(1, 'La mesa es requerida'),
}).refine((data) => {
  return data.horaInicio < data.horaFin;
}, {
  message: 'La hora de inicio debe ser menor que la hora de fin',
  path: ['horaFin'],
});

export type CreateReservaFormValues = z.infer<typeof createReservaSchema>;

export const createClienteSimpleSchema = z.object({
  nombre: z.string().min(1, 'El nombre es requerido'),
  apellido: z.string().min(1, 'El apellido es requerido'),
  telefono: z.number().min(1, 'El teléfono es requerido'),
  cedula: z.number().min(1, 'La cédula es requerida'),
});

export type CreateClienteSimpleValues = z.infer<typeof createClienteSimpleSchema>;
