import { createTheme, type PaletteMode } from '@mui/material/styles';

export const getMuiTheme = (_mode: PaletteMode) => createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#960A00',
      light: '#C52217',
      dark: '#5C0600',
      contrastText: '#fff7ed',
    },
    secondary: {
      main: '#c79b6b',
      contrastText: '#130f0d',
    },
    background: {
      default: '#100d0c',
      paper: '#1b1714',
    },
    text: {
      primary: '#fff8f0',
      secondary: '#b8a79a',
    },
    divider: 'rgba(150, 10, 0, 0.2)',
    error: {
      main: '#ff6b5f',
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    h5: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    h6: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    subtitle2: {
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 800,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            'radial-gradient(circle at 18% 18%, rgba(150, 10, 0, 0.15), transparent 34%), #100d0c',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(199, 155, 107, 0.14)',
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.32)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
        },
        contained: {
          background: 'linear-gradient(135deg, #7F0800 0%, #B8170B 100%)',
          boxShadow: '0 16px 34px rgba(150, 10, 0, 0.32)',
          '&:hover': {
            background: 'linear-gradient(135deg, #960A00 0%, #D43124 100%)',
            boxShadow: '0 18px 38px rgba(150, 10, 0, 0.42)',
          },
        },
        outlined: {
          borderColor: 'rgba(199, 155, 107, 0.24)',
          color: '#fff8f0',
          '&:hover': {
            borderColor: 'rgba(197, 34, 23, 0.72)',
            backgroundColor: 'rgba(150, 10, 0, 0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            color: '#d9c0aa',
          },
          '& .MuiInputBase-root': {
            backgroundColor: '#211c18',
            borderRadius: 10,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(199, 155, 107, 0.18)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(197, 34, 23, 0.56)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(16, 13, 12, 0.88)',
          borderBottom: '1px solid rgba(199, 155, 107, 0.16)',
          boxShadow: 'none',
          backdropFilter: 'blur(14px)',
        },
      },
    },
  },
});



