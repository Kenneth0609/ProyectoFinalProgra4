import { Stack, TextField, Button } from '@mui/material';
import { useUserSearch } from '../model/useUserSearch';

export const UserSearchBox = () => {
  const { searchTerm, setSearchTerm, clearSearchTerm } = useUserSearch();

  return (
    <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
      <TextField
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar usuarios..."
        size="small"
        fullWidth
      />
      <Button 
        variant="outlined" 
        onClick={clearSearchTerm}
        disabled={!searchTerm}
      >
        Limpiar
      </Button>
    </Stack>
  );
};
