import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { LoginResponse, AuthState } from './auth.types';

interface AuthActions {
  setAuth: (data: LoginResponse) => void;
  logout: () => void;
}

const initialState: AuthState = {
  token: null,
  email: null,
  role: null,
  isAuthenticated: false,
};

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      ...initialState,
      setAuth: (data) =>
        set({
          token: data.token,
          email: data.email,
          role: data.role,
          isAuthenticated: true,
        }),
      logout: () => {
        set(initialState);
        localStorage.removeItem('auth-storage');
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
