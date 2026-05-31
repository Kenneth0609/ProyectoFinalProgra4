import { useQuery } from '@tanstack/react-query';
import { zonaApi } from '../api/zona.api';

export const useZonas = () => {
  return useQuery({
    queryKey: ['zonas'],
    queryFn: zonaApi.getZonas,
  });
};
