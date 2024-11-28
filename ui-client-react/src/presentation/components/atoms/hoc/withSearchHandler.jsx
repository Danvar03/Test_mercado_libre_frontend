import React from 'react';
import { useNavigate } from 'react-router-dom';

const withSearchHandler = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();

    const searchStrategies = {
      byId: (value) => `/items/${value}`,
      byQuery: (value) => `/items?search=${encodeURIComponent(value)}`,
    };

    const determineStrategy = (searchValue) => {
      if (searchValue.startsWith('MLA')) {
        return 'byId';
      }
      return 'byQuery';
    };

    const handleSearch = (searchValue) => {
      if (!searchValue) return;

      const strategy = determineStrategy(searchValue);

      navigate(searchStrategies[strategy](searchValue));
    };

    return <WrappedComponent {...props} handleSearch={handleSearch} />;
  };
};

export default withSearchHandler;
