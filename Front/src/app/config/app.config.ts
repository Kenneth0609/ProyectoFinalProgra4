export type AppConfig = {
  appName: string;
  appVersion: string;
  apiBaseUrl: string;
};

export const appConfig: AppConfig = {
  appName: 'Vite React FSD Template',
  appVersion: '1.0.0',
  apiBaseUrl: import.meta.env.VITE_API_URL || 'https://api.example.com',
};
