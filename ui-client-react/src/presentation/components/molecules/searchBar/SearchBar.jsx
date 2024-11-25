import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.scss';

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
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-bar__container">
        <input
          className="search-bar__input"
          name="search"
          placeholder="Nunca dejes de buscar"
          defaultValue={query}
        />
        <button className="search-bar__button" type="submit">
          🔍
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
