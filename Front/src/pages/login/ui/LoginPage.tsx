import { Box, Stack, Typography } from '@mui/material';
import { LoginForm } from '@/features/auth-by-email';
import { useMesas } from '@/entities/mesa';
import { useReservas } from '@/entities/reserva';
import { useTurnos } from '@/entities/turno';
import { BrandLogo } from '@/shared/ui/BrandLogo';

export const LoginPage = () => {
  const { data: reservas = [], isLoading: loadingReservas, isError: errorReservas } = useReservas();
  const { data: turnos = [], isLoading: loadingTurnos, isError: errorTurnos } = useTurnos();
  const { data: mesas = [], isLoading: loadingMesas, isError: errorMesas } = useMesas();

  const formatStat = (value: number, isLoading: boolean, isError: boolean) => {
    if (isLoading) return '...';
    if (isError) return '--';
    return value.toString();
  };

  const stats = [
    {
      value: formatStat(reservas.length, loadingReservas, errorReservas),
      label: 'Reservas',
    },
    {
      value: formatStat(turnos.filter((turno) => turno.activo).length, loadingTurnos, errorTurnos),
      label: 'Turnos activos',
    },
    {
      value: formatStat(mesas.length, loadingMesas, errorMesas),
      label: 'Mesas',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1.15fr 0.85fr' },
        background: '#100d0c',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: { xs: 'none', md: 'flex' },
          minHeight: '100vh',
          p: { md: 5, lg: 7 },
          alignItems: 'flex-end',
          overflow: 'hidden',
          background:
            'linear-gradient(90deg, rgba(16,13,12,0.9), rgba(16,13,12,0.42)), url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=80") center/cover',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(16,13,12,0.18), rgba(16,13,12,0.82))',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            right: -120,
            bottom: -140,
            width: 430,
            height: 430,
            borderRadius: '50%',
            border: '1px solid rgba(229,27,34,0.16)',
            boxShadow: 'inset 0 0 0 22px rgba(150,10,0,0.05)',
            zIndex: 1,
          },
        }}
      >
        <Stack
          direction="row"
          spacing={1.5}
          sx={{ position: 'absolute', top: 42, left: { md: 40, lg: 56 }, zIndex: 2, alignItems: 'center' }}
        >
          <BrandLogo markSize={52} textSize={34} />
        </Stack>

        <Stack
          spacing={5}
          sx={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: 560,
          }}
        >
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                color: '#C52217',
                mb: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                '&::before': {
                  content: '""',
                  width: 30,
                  height: 1,
                  backgroundColor: '#C52217',
                },
              }}
            >
              Portal administrativo
            </Typography>
            <Typography
              component="h1"
              sx={{
                maxWidth: 500,
                fontSize: { md: 42, lg: 52 },
                lineHeight: 1.08,
                fontWeight: 900,
                letterSpacing: 0,
              }}
            >
              Panel Administrativo
            </Typography>
            <Typography sx={{ mt: 3, maxWidth: 460, color: '#cdb9a8', lineHeight: 1.75 }}>
              Accede con tu cuenta para gestionar pedidos, menu, mesas, inventario y operaciones del restaurante desde un solo lugar.
            </Typography>
          </Box>

          <Stack direction="row" spacing={7}>
            {stats.map((stat) => (
              <Box key={stat.label}>
                <Typography sx={{ fontSize: 26, fontWeight: 900, lineHeight: 1 }}>{stat.value}</Typography>
                <Typography sx={{ mt: 0.75, color: '#a99586', fontSize: 13 }}>{stat.label}</Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 3, sm: 5, md: 8 },
          background:
            'linear-gradient(180deg, rgba(30,23,19,0.86), rgba(16,13,12,1))',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 520 }}>
          <Stack direction="row" spacing={1.5} sx={{ display: { xs: 'flex', md: 'none' }, mb: 7, alignItems: 'center' }}>
            <BrandLogo compact markSize={46} textSize={28} />
          </Stack>

          <Typography
            variant="h4"
            sx={{
              mb: 1.5,
              fontSize: { xs: 32, sm: 42 },
              lineHeight: 1.12,
              fontWeight: 900,
              letterSpacing: 0,
            }}
          >
            Panel Administrativo
          </Typography>
          <Typography sx={{ color: '#cdb9a8', mb: 4, fontSize: 18, lineHeight: 1.55 }}>
            Gestiona pedidos, mesas, menu, inventario y reportes del restaurante desde un solo lugar.
          </Typography>
          <LoginForm />
        </Box>
      </Box>
    </Box>
  );
};
