import { create } from 'zustand';

export type ThemeMode = 'light' | 'dark';

export type ThemeModeState = {
  mode: ThemeMode;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
};

export const useThemeModeStore = create<ThemeModeState>((set) => ({
  mode: 'light',
  toggleMode: () => set((state) => ({ 
    mode: state.mode === 'light' ? 'dark' : 'light' 
  })),
  setMode: (mode) => set({ mode }),
}));
