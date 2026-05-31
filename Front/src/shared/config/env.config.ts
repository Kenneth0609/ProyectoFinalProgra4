export type Env = {
  apiBaseUrl: string;
  appMode: 'development' | 'production' | 'test';
};

export const envConfig: Env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
  appMode: (import.meta.env.MODE as Env['appMode']) || 'development',
};
