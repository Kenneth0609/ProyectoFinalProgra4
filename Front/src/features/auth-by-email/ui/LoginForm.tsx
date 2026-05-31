import { useState } from 'react';
import { Box, Stack, Typography, TextField, Button, Alert } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
import { useLoginForm } from '../model/useLoginForm';
import { useAuthStore } from '../model/auth.store';
import { authApi } from '../api/auth.api';
import type { LoginFormValues } from '../model/auth.schema';

export const LoginForm = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm();

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authApi.login(data);
      setAuth(response);
      navigate({ to: '/dashboard' });
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al iniciar sesión. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit(onSubmit)} 
      noValidate 
      sx={{ width: '100%' }}
    >
      <Stack spacing={3}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Iniciar Sesión
        </Typography>

        {error && <Alert severity="error">{error}</Alert>}
        
        <TextField
          {...register('email')}
          label="Correo electrónico"
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
          type="email"
          disabled={isLoading}
        />

        <TextField
          {...register('password')}
          label="Contraseña"
          fullWidth
          error={!!errors.password}
          helperText={errors.password?.message}
          type="password"
          disabled={isLoading}
        />

        <Button 
          type="submit" 
          variant="contained" 
          fullWidth 
          size="large"
          disabled={isLoading}
        >
          {isLoading ? 'Accediendo...' : 'Acceder'}
        </Button>
      </Stack>
    </Box>
  );
};
