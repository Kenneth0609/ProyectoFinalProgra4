import type { ColumnDef } from '@tanstack/react-table';

export type TableConfig<TData extends object> = {
  data: TData[];
  columns: ColumnDef<TData, unknown>[];
  isLoading?: boolean;
};
