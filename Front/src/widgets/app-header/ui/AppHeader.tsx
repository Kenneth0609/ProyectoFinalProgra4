import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
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
      <Toolbar sx={{ minHeight: 72 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: 1 }}>
          <Box
            sx={{
              width: 34,
              height: 34,
              display: 'grid',
              placeItems: 'center',
              borderRadius: 2,
              color: 'primary.light',
              border: '1px solid rgba(150,10,0,0.5)',
              backgroundColor: 'rgba(150,10,0,0.17)',
            }}
          >
            <RestaurantMenuIcon fontSize="small" />
          </Box>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {userName && (
            <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' }, color: 'text.secondary' }}>
              Hola, {userName}
            </Typography>
          )}
          <ThemeModeToggle />
          <Tooltip title="Cerrar sesion">
            <IconButton color="inherit" onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};



