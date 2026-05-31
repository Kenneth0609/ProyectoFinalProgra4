import { Stack, Typography, Button } from '@mui/material';
import { useThemeModeStore } from '../model/useThemeModeStore';

export const ThemeModeToggle = () => {
  const { mode, toggleMode } = useThemeModeStore();

  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Typography variant="body2">
        Modo actual: <strong>{mode}</strong>
      </Typography>
      <Button 
        variant="outlined" 
        onClick={toggleMode}
        size="small"
      >
        Cambiar a {mode === 'light' ? 'Oscuro' : 'Claro'}
      </Button>
    </Stack>
  );
};
