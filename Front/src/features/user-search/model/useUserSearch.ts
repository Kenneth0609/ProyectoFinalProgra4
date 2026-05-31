import { useState, useCallback } from 'react';

export const useUserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const clearSearchTerm = useCallback(() => {
    setSearchTerm('');
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    clearSearchTerm,
  };
};
