import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, IconButton } from '@mui/material';
import './SearchBar.scss';
import logoSearch from '../../../assets/image/ic_Search.png';
import CustomAtom from '../../atoms/input/CustomTextField';

const SearchBar = ({ query, onSearch }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value.trim();
    if (searchValue) {
      onSearch(searchValue);
      navigate(`/items?search=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', alignItems: 'center', width: '40%' }}
    >
      <CustomAtom
        name="search"
        variant="outlined"
        placeholder="Nunca dejes de buscar"
        defaultValue={query}
        fullWidth
        size="small"
        sx={{
          backgroundColor: '#fff',
          borderRadius: '4px 0 0 4px',
          width: '38rem',
        }}
      />

      <IconButton
        type="submit"
        sx={{
          backgroundColor: 'white',
          borderRadius: '0 4px 4px 0',
          padding: '8px',
          '&:hover': {
            backgroundColor: '#fff9b1',
          },
        }}
      >
        <img
          src={logoSearch}
          alt="Buscar"
          style={{ width: '20px', height: '20px' }}
        />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
