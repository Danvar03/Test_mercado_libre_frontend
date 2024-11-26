import React from 'react';
import { useNavigate } from 'react-router-dom';

const withSearchHandler = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();

    const handleSearch = (searchValue, onSearch) => {
      if (!searchValue) return;

      if (searchValue.startsWith('MLA')) {
        navigate(`/items/${searchValue}`);
        return;
      }

      onSearch(searchValue);
      navigate(`/items?search=${encodeURIComponent(searchValue)}`);
    };

    return <WrappedComponent {...props} handleSearch={handleSearch} />;
  };
};

export default withSearchHandler;
