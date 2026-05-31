import { AppDataTable } from '@/shared/ui/AppDataTable';
import type { Mesa } from '@/entities/mesa';
import { mesaTableColumns } from '../model/mesaTable.columns';

type MesaTableProps = {
  mesas: Mesa[];
  isLoading?: boolean;
};

export const MesaTable = ({ mesas, isLoading }: MesaTableProps) => {
  return (
    <AppDataTable
      data={mesas}
      columns={mesaTableColumns}
      isLoading={isLoading}
    />
  );
};
