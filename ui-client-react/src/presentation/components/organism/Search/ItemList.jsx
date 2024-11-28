import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setQuery,
  setPage,
  updateCurrentItems,
} from '../../../../application/redux/slices/itemsSlice';
import Breadcrumb from '../../molecules/breadcrumb/Breadcrumb';
import Pagination from '../../molecules/pagination/Pagination';
import './ItemList.scss';
import useItemSearch from '../../../../application/hooks/useItemSearch';
import ItemListContent from '../../molecules/Items/ItemListContent';

const ItemList = () => {
  const { items, categories, pagination, error, handlePageChange, loading } =
    useItemSearch();

  return (
    <div className="search-container">
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Breadcrumb
        items={categories.map((category) => ({
          label: category,
          href: `/items?search=${encodeURIComponent(category)}`,
        }))}
      />

      <ItemListContent items={items} loading={loading} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
};

export default ItemList;
