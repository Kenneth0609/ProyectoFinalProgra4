import { AppBar, Toolbar, Typography, Box, IconButton, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from '@tanstack/react-router';
import { ThemeModeToggle } from '@/features/theme-mode';
import { useAuthStore } from '@/features/auth-by-email';
import type { AppHeaderProps } from '../model/appHeader.types';

export const AppHeader = ({ title, userName }: AppHeaderProps) => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate({ to: '/login' });
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {userName && (
            <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
              Hola, {userName}
            </Typography>
          )}
          <ThemeModeToggle />
          <Tooltip title="Cerrar sesión">
            <IconButton color="inherit" onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
