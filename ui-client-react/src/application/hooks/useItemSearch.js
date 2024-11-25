import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchItems, setQuery, setPage } from '../redux/slices/itemsSlice';

const useItemSearch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get('search');
  const {
    items,
    currentItems,
    currentCategories,
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

  return {
    items,
    currentItems,
    currentCategories,
    categories,
    pagination,
    loading,
    error,
    handlePageChange,
  };
};

export default useItemSearch;
