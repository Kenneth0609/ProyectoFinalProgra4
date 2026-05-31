import { httpClient } from '@/shared/api/httpClient';
import type { User } from '../model/user.types';
import type { UserDto } from './user.dto';
import { mapUserDto } from '../lib/mapUserDto';

export const getUsers = async (): Promise<User[]> => {
  const response = await httpClient.get<UserDto[]>('/users');
  return response.data.map(mapUserDto);
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await httpClient.get<UserDto>(`/users/${id}`);
  return mapUserDto(response.data);
};
