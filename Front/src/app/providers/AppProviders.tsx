import { useMemo, type ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryProvider } from './QueryProvider';
import { getMuiTheme } from '../theme/muiTheme';
import { useThemeModeStore } from '@/features/theme-mode';

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
  const mode = useThemeModeStore((state) => state.mode);
  
  const theme = useMemo(() => getMuiTheme(mode), [mode]);

  return (
    <QueryProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </QueryProvider>
  );
};
