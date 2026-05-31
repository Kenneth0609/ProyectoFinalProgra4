import type { User, UserRole, UserStatus } from '../model/user.types';
import type { UserDto } from '../api/user.dto';

export const mapUserDto = (dto: UserDto): User => ({
  id: dto.id,
  fullName: dto.full_name,
  email: dto.email,
  role: dto.role as UserRole,
  status: dto.status as UserStatus,
  avatarUrl: dto.avatar_url,
});
