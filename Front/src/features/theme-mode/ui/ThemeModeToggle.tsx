import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeModeStore } from '../model/useThemeModeStore';

export const ThemeModeToggle = () => {
  const { mode, toggleMode } = useThemeModeStore();

  return (
    <Tooltip title={`Cambiar a modo ${mode === 'light' ? 'oscuro' : 'claro'}`}>
      <IconButton 
        onClick={toggleMode} 
        color="inherit"
        aria-label="alternar tema claro/oscuro"
      >
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};
