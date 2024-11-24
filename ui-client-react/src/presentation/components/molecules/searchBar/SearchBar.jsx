import React from "react";

const SearchBar = ({ query, onSearch }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value.trim();
    if (searchValue) {
      onSearch(searchValue);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="search" placeholder="Nunca dejes de buscar" defaultValue={query} />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
