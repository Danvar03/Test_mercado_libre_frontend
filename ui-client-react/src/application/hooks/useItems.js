import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, setPage } from '../application/redux/slices/itemsSlice';
import { getItems } from '../../infraestructure/adapters/getItems';

const useItems = () => {
  const dispatch = useDispatch();

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

  const fetchData = async () => {
    try {
      const data = await getItems(query, page, pageSize);
      dispatch({
        type: 'items/setItems',
        payload: {
          items: data.items || [],
          categories: data.categories || [],
          pagination: data.pagination || {},
        },
      });
    } catch (err) {
      dispatch({
        type: 'items/setError',
        payload: err.message,
      });
    } finally {
      dispatch({ type: 'items/setLoading', payload: false });
    }
  };

  useEffect(() => {
    dispatch({ type: 'items/setLoading', payload: true });
    fetchData();
  }, [query, page, pageSize]);

  return {
    items,
    categories,
    pagination,
    loading,
    error,
    setQuery: (query) => dispatch(setQuery(query)),
    setPage: (page) => dispatch(setPage(page)),
  };
};

export default useItems;
