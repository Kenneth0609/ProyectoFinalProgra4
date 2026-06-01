import type { ColumnDef } from "@tanstack/react-table";
import type { Turno } from "@/entities/turno";
import { Chip } from "@mui/material";

export const turnoTableColumns: ColumnDef<Turno>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  {
    accessorKey: "horaInicio",
    header: "Hora Inicio",
  },
  {
    accessorKey: "horaFin",
    header: "Hora Fin",
  },
  {
    accessorKey: "activo",
    header: "Estado",
    cell: ({ row }) => (
      <Chip
        label={row.original.activo ? "Activo" : "Inactivo"}
        color={row.original.activo ? "success" : "default"}
        size="small"
      />
    ),
  },
];
