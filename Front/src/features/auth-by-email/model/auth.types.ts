export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  email: string;
  role: string;
};

export type AuthState = {
  token: string | null;
  email: string | null;
  role: string | null;
  isAuthenticated: boolean;
};
