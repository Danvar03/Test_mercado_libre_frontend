import React, { useRef } from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import './SearchBar.scss';
import logoSearch from '../../../assets/image/ic_Search.png';
import CustomAtom from '../../atoms/input/CustomTextField';
import withSearchHandler from '../../atoms/hoc/withSearchHandler';

const SearchBar = ({ query, onSearch, handleSearch }) => {
  const inputRef = useRef();
  const isMobile = useMediaQuery('(max-width:768px)'); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = inputRef.current.value.trim();
    if (searchValue) {
      handleSearch(searchValue, onSearch);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="search-bar">
      <Box className="search-bar__container">
        <CustomAtom
          name="search"
          inputRef={inputRef}
          variant="outlined"
          placeholder={isMobile ? '' : 'Nunca dejes de buscar'}
          defaultValue={query}
          size="small"
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
