import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems, setQuery, setPage } from "../../../../application/redux/slices/itemsSlice";
import Categories from "../../molecules/categories/Categories";
import ItemList from "../../molecules/Items/ItemList";
import Pagination from "../../molecules/pagination/Pagination";
import SearchBar from "../../molecules/searchBar/SearchBar";

const Search = () => {
  const dispatch = useDispatch();
  const { items, categories, pagination, loading, error, query, page, pageSize } =
    useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems({ query, page, pageSize }));
  }, [query, page, pageSize, dispatch]);

  const handleSearch = (query) => {
    dispatch(setQuery(query));
  };

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div>
      <h1>Lista productos</h1>
      <SearchBar query={query} onSearch={handleSearch} />

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <>
          <Categories categories={categories} />
          <ItemList items={items} />
          <Pagination
            pagination={pagination}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Search;
