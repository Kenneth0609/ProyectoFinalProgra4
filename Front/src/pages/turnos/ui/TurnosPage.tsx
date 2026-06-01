import { Box, Button, Typography, Paper } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { useTurnos } from "@/entities/turno";
import { TurnoTable } from "@/widgets/turno-table";
import { MainLayout } from "@/widgets/main-layout";

export default function TurnosPage() {
  const { data: turnos = [], isLoading } = useTurnos();

  return (
    <MainLayout>
      <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h4" component="h1">
          Gestión de Turnos
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            // TODO: Implementar modal de creación
            console.log("Nuevo turno");
          }}
        >
          Nuevo Turno
        </Button>
      </Box>

      <Paper sx={{ p: 2 }}>
        <TurnoTable turnos={turnos} isLoading={isLoading} />
      </Paper>
    </MainLayout>
  );
}
