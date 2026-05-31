import { httpClient } from '@/shared/api/httpClient';
import type { LoginRequest, LoginResponse } from '../model/auth.types';

export const authApi = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await httpClient.post<LoginResponse>('/Auth/login', credentials);
    return response.data;
  },
};
