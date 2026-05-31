import { Box, Typography, Stack, Paper } from '@mui/material';
import { MainLayout } from '@/widgets/main-layout';
import { UserSearchBox } from '@/features/user-search';
import { UserTable } from '@/widgets/user-table';
import type { User } from '@/entities/user';

const MOCK_USERS: User[] = [
  {
    id: '1',
    fullName: 'Juan Pérez',
    email: 'juan.perez@example.com',
    role: 'admin',
    status: 'active',
  },
  {
    id: '2',
    fullName: 'María García',
    email: 'maria.garcia@example.com',
    role: 'editor',
    status: 'active',
  },
  {
    id: '3',
    fullName: 'Carlos López',
    email: 'carlos.lopez@example.com',
    role: 'viewer',
    status: 'inactive',
  },
];

export const UsersPage = () => {
  return (
    <MainLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Usuarios
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Administra y visualiza la lista de usuarios registrados.
        </Typography>
      </Box>

      <Stack spacing={3}>
        <Paper sx={{ p: 2 }}>
          <UserSearchBox />
        </Paper>
        
        <UserTable users={MOCK_USERS} />
      </Stack>
    </MainLayout>
  );
};
