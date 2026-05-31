import { AppDataTable } from '@/shared/ui/AppDataTable';
import type { User } from '@/entities/user';
import { userTableColumns } from '../model/userTable.columns';

type UserTableProps = {
  users: User[];
  isLoading?: boolean;
};

export const UserTable = ({ users, isLoading }: UserTableProps) => {
  return (
    <AppDataTable
      data={users}
      columns={userTableColumns}
      isLoading={isLoading}
    />
  );
};
