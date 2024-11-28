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
    categories,
    pagination,
    loading,
    error,
    query,
    page,
    pageSize,
  } = useSelector((state) => state.items);

  useEffect(() => {
    if (!searchParam) {
      dispatch(setQuery(''));
      dispatch(fetchItems({ query: '', page: 1, pageSize }));
      return;
    }

    if (query !== searchParam) {
      dispatch(setQuery(searchParam));
      dispatch(fetchItems({ query: searchParam, page: 1, pageSize }));
    }
  }, [searchParam, dispatch, query, pageSize]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
    dispatch(fetchItems({ query, page: newPage, pageSize }));
  };

  return {
    items,
    categories,
    pagination,
    loading,
    error,
    handlePageChange,
  };
};
export default useItemSearch;
