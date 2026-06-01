import { AppDataTable } from '@/shared/ui/AppDataTable';
import type { Turno } from '@/entities/turno';
import { turnoTableColumns } from '../model/turnoTable.columns';

type TurnoTableProps = {
  turnos: Turno[];
  isLoading?: boolean;
};

export const TurnoTable = ({ turnos, isLoading }: TurnoTableProps) => {
  return (
    <AppDataTable
      data={turnos}
      columns={turnoTableColumns}
      isLoading={isLoading}
    />
  );
};
