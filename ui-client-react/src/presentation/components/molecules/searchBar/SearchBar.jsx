import React from 'react';
import { Box, IconButton } from '@mui/material';
import './SearchBar.scss';
import logoSearch from '../../../assets/image/ic_Search.png';
import CustomAtom from '../../atoms/input/CustomTextField';
import withSearchHandler from '../../hoc/withSearchHandler';

const SearchBar = ({ query, onSearch, handleSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value.trim();
    if (searchValue) {
      handleSearch(searchValue, onSearch);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="search-bar">
      <Box className="search-bar__container">
        <CustomAtom
          name="search"
          variant="outlined"
          placeholder="Nunca dejes de buscar"
          defaultValue={query}
          size="small"
          className="search-bar__input"
        />
        <IconButton type="submit" className="search-bar__button">
          <img
            src={logoSearch}
            alt="Buscar"
            style={{ width: '20px', height: '20px' }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default withSearchHandler(SearchBar);
