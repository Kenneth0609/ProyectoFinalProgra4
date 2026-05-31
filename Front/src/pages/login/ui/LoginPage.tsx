import { Box, Container, Typography, Paper } from '@mui/material';
import { LoginForm } from '@/features/auth-by-email';

export const LoginPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: (theme) => theme.palette.grey[100],
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
            Bienvenido
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mb: 3 }}>
            Por favor, ingresa tus credenciales para continuar.
          </Typography>
          <LoginForm />
        </Paper>
      </Container>
    </Box>
  );
};
