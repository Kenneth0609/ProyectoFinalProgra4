import type { ColumnDef } from "@tanstack/react-table";
import type { ListaEspera } from "@/entities/listaespera";
import { Button, Chip, Stack, Tooltip, Typography } from "@mui/material";
import { 
    CheckCircle as CheckCircleIcon, 
    Cancel as CancelIcon, 
    DoneAll as DoneAllIcon 
} from "@mui/icons-material";

export const createListaEsperaColumns = (
    onPromote: (lista: ListaEspera) => void,
    onCancel: (id: number) => void,
    onMarkAtendido: (id: number) => void
): ColumnDef<ListaEspera>[] => [
  {
    accessorKey: "id",
    header: "ID",
    size: 60,
  },
  {
    accessorKey: "clienteId",
    header: "Cliente ID",
    size: 100,
  },
  {
    accessorKey: "fecha",
    header: "Fecha",
  },
  {
    header: "Horario",
    cell: ({ row }) => (
        <Typography variant="body2">
            {row.original.horaInicio.substring(0, 5)} - {row.original.horaFin.substring(0, 5)}
        </Typography>
    )
  },
  {
    accessorKey: "cantidad",
    header: "Pers.",
    size: 70,
  },
  {
    accessorKey: "estadoId",
    header: "Estado",
    cell: ({ row }) => {
        const id = row.original.estadoId;
        let label = "Pendiente";
        let color: "warning" | "error" | "success" | "info" = "warning";

        if (id === 2) { label = "Cancelada"; color = "error"; }
        if (id === 3) { label = "Pendiente"; color = "warning"; }
        if (id === 4) { label = "Atendido"; color = "success"; }

        return <Chip label={label} color={color} size="small" />;
    }
  },
  {
    accessorKey: "observaciones",
    header: "Observaciones",
    cell: ({ row }) => (
        <Tooltip title={row.original.observaciones || ""}>
            <Typography variant="body2" sx={{ maxWidth: 150, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {row.original.observaciones || "-"}
            </Typography>
        </Tooltip>
    )
  },
  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => {
        const isPendiente = row.original.estadoId === 3;
        
        return (
            <Stack direction="row" spacing={1}>
                {isPendiente && (
                    <>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            startIcon={<CheckCircleIcon />}
                            onClick={() => onPromote(row.original)}
                        >
                            Mesa
                        </Button>
                        <Button
                            variant="outlined"
                            color="success"
                            size="small"
                            startIcon={<DoneAllIcon />}
                            onClick={() => onMarkAtendido(row.original.id)}
                        >
                            Listo
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            startIcon={<CancelIcon />}
                            onClick={() => onCancel(row.original.id)}
                        >
                            X
                        </Button>
                    </>
                )}
            </Stack>
        );
    },
  },
];
