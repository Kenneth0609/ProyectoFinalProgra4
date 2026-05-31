import { Card, CardContent, Typography, Stack, Chip, Box } from '@mui/material';
import type { User } from '../model/user.types';
import { UserAvatar } from './UserAvatar';

type UserCardProps = {
  user: User;
};

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center', mb: 2 }}>
          <UserAvatar fullName={user.fullName} avatarUrl={user.avatarUrl} />
          <Box>
            <Typography variant="h6">{user.fullName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip 
            label={user.role} 
            size="small" 
            color="primary" 
            variant="outlined" 
          />
          <Chip 
            label={user.status} 
            size="small" 
            color={user.status === 'active' ? 'success' : 'default'} 
          />
        </Stack>
      </CardContent>
    </Card>
  );
};
