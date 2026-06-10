import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from '@tanstack/react-router';
import { useLoginForm } from '../model/useLoginForm';
import { useAuthStore } from '../model/auth.store';
import { authApi } from '../api/auth.api';
import type { LoginFormValues } from '../model/auth.schema';

const inputSx = {
  '& .MuiInputLabel-root': {
    color: '#fff8f0',
    fontSize: 14,
    fontWeight: 800,
    transform: 'none',
    position: 'relative',
    mb: 0.75,
  },
  '& .MuiInputLabel-shrink': {
    transform: 'none',
  },
  '& .MuiInputBase-root': {
    minHeight: 44,
    backgroundColor: '#121c2b',
    borderRadius: 1,
    color: '#fff8f0',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(137, 159, 190, 0.42)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(197, 34, 23, 0.58)',
  },
  '& .MuiInputBase-input': {
    p: '10px 12px',
    fontSize: 14,
    fontWeight: 500,
    '&::placeholder': {
      color: '#8ea0ba',
      opacity: 1,
    },
  },
  '& .MuiFormHelperText-root': {
    mx: 0,
  },
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
      setError(err.response?.data?.message || 'Error al iniciar sesion. Intentalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ width: '100%' }}>
      <Stack spacing={2.5}>
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          {...register('email')}
          label="E-mail"
          placeholder="Ejemplo@gmail.com"
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
          type="email"
          disabled={isLoading}
          sx={inputSx}
          slotProps={{
            inputLabel: { shrink: true },
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon sx={{ color: '#9fb0c8', fontSize: 21 }} />
                </InputAdornment>
              ),
            },
          }}
        />

        <TextField
          {...register('password')}
          label="Contraseña"
          placeholder="********"
          fullWidth
          error={!!errors.password}
          helperText={errors.password?.message}
          type={showPassword ? 'text' : 'password'}
          disabled={isLoading}
          sx={inputSx}
          slotProps={{
            inputLabel: { shrink: true },
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon sx={{ color: '#9fb0c8', fontSize: 21 }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    edge="end"
                    onClick={() => setShowPassword((current) => !current)}
                    onMouseDown={(event) => event.preventDefault()}
                    sx={{
                      color: '#cdb9a8',
                      borderRadius: 1,
                      fontSize: 12,
                      fontWeight: 900,
                      px: 1,
                      '&:hover': { backgroundColor: 'rgba(197, 34, 23, 0.12)' },
                    }}
                  >
                    <Typography component="span" sx={{ fontSize: 12, fontWeight: 900 }}>
                      {showPassword ? 'Ocultar' : 'Ver'}
                    </Typography>
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          disabled={isLoading}
          sx={{
            height: 50,
            borderRadius: 1,
            fontSize: 14,
            fontWeight: 900,
          }}
        >
          {isLoading ? 'Accediendo...' : 'Acceder'}
        </Button>
      </Stack>
    </Box>
  );
};
