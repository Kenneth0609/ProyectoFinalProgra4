import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from '@tanstack/react-router';
import { ThemeModeToggle } from '@/features/theme-mode';
import { useAuthStore } from '@/features/auth-by-email';
import { BrandLogo } from '@/shared/ui/BrandLogo';
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
          <BrandLogo compact markSize={42} textSize={25} />
          <Box
            component="span"
            sx={{
              border: 0,
              clip: 'rect(0 0 0 0)',
              height: 1,
              margin: -1,
              overflow: 'hidden',
              p: 0,
              position: 'absolute',
              width: 1,
            }}
          >
            {title}
          </Box>
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



