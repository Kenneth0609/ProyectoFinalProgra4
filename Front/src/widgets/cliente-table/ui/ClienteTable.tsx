import { AppDataTable } from '@/shared/ui/AppDataTable';
import type { Cliente } from '@/entities/cliente';
import { clienteTableColumns } from '../model/clienteTable.columns';

type ClienteTableProps = {
  clientes: Cliente[];
  isLoading?: boolean;
};

export const ClienteTable = ({ clientes, isLoading }: ClienteTableProps) => {
  return (
    <AppDataTable
      data={clientes}
      columns={clienteTableColumns}
      isLoading={isLoading}
    />
  );
};
