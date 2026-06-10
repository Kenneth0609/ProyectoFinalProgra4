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
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 18% 8%, rgba(150,10,0,0.13), transparent 28%), #100d0c",
      }}
    >
      <AppHeader title="Restaurante" userName={email || "Usuario"} />
      <AppSidebar items={sidebarItems} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
          color: "text.primary",
        }}
      >
        <Toolbar />
        <Container
          maxWidth="lg"
          sx={{
            py: 2,
            "& .MuiPaper-root, & .MuiCard-root": {
              backgroundColor: "rgba(27,23,20,0.92)",
              borderColor: "rgba(199,155,107,0.16)",
            },
          }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
};



