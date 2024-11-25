import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  fetchItems,
  setQuery,
  setPage,
} from '../../../../application/redux/slices/itemsSlice';
import Breadcrumb from '../../molecules/breadcrumb/Breadcrumb';
import ItemList from '../../molecules/Items/ItemList';
import Pagination from '../../molecules/pagination/Pagination';
import './Search.scss';

const Search = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get('search');
  const {
    items,
    categories,
    pagination,
    loading,
    error,
    query,
    page,
    pageSize,
  } = useSelector((state) => state.items);

  useEffect(() => {
    if (searchParam) {
      dispatch(setQuery(searchParam));
    }
  }, [searchParam, dispatch]);

  useEffect(() => {
    if (query) {
      dispatch(fetchItems({ query, page, pageSize }));
    }
  }, [query, page, pageSize, dispatch]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div className="search-container">
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <>
          <Breadcrumb
            items={categories.map((category) => ({
              label: category,
              href: `/items?search=${encodeURIComponent(category)}`,
            }))}
          />
          <ItemList items={items} />
          <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </>
      )}
    </div>
  );
};

export default Search;
