import { Box, Toolbar, Container } from "@mui/material";
import { AppHeader } from "@/widgets/app-header";
import { AppSidebar } from "@/widgets/app-sidebar";
import { useAuthStore } from "@/features/auth-by-email";
import type { MainLayoutProps } from "../model/mainLayout.types";

const sidebarItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Reservas", path: "/reservas" },
  { label: "Lista de Espera", path: "/lista-espera" },
  { label: "Turnos", path: "/turnos" },
  { label: "Clientes", path: "/clientes" },
  { label: "Mesas", path: "/mesas" },
  { label: "Zonas", path: "/zonas" },
  { label: "Usuarios", path: "/users" },
];

export const MainLayout = ({ children }: MainLayoutProps) => {
  const email = useAuthStore((state) => state.email);

  return (
    <Box sx={{ display: "flex" }}>
      <AppHeader title="Restaurante" userName={email || "Usuario"} />
      <AppSidebar items={sidebarItems} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
        }}
      >
        <Toolbar />
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </Box>
  );
};
