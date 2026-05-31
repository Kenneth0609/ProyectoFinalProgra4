import { Avatar } from '@mui/material';
import { createInitials } from '@/shared/lib/createInitials';

type UserAvatarProps = {
  fullName: string;
  avatarUrl?: string;
};

export const UserAvatar = ({ fullName, avatarUrl }: UserAvatarProps) => {
  return (
    <Avatar src={avatarUrl} alt={fullName}>
      {!avatarUrl && createInitials(fullName)}
    </Avatar>
  );
};
