import { AppDataTable } from '@/shared/ui/AppDataTable';
import type { Zona } from '@/entities/zona';
import { zonaTableColumns } from '../model/zonaTable.columns';

type ZonaTableProps = {
  zonas: Zona[];
  isLoading?: boolean;
};

export const ZonaTable = ({ zonas, isLoading }: ZonaTableProps) => {
  return (
    <AppDataTable
      data={zonas}
      columns={zonaTableColumns}
      isLoading={isLoading}
    />
  );
};
