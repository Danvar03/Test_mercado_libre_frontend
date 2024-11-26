import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../molecules/breadcrumb/Breadcrumb';
import Pagination from '../../molecules/pagination/Pagination';
import './ItemList.scss';
import useItemSearch from '../../../../application/hooks/useItemSearch';
import ItemListContent from '../../molecules/Items/ItemListContent';

const ItemList = () => {
  const { items, categories, pagination, loading, error, handlePageChange } =
    useItemSearch();

  const [currentItems, setCurrentItems] = useState([]);
  const [currentCategories, setCurrentCategories] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setCurrentItems(items);
      setCurrentCategories(categories);
    }
  }, [items, categories, loading, error]);

  return (
    <div className="search-container">
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Breadcrumb
        items={currentCategories.map((category) => ({
          label: category,
          href: `/items?search=${encodeURIComponent(category)}`,
        }))}
      />

      <ItemListContent items={currentItems} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
};

export default ItemList;
