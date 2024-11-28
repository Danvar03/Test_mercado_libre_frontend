import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../molecules/breadcrumb/Breadcrumb';
import ItemDetails from '../../molecules/item-details/ItemDetails';
import ItemImage from '../../molecules/Item-image-detail/ItemImage';
import ItemDescription from '../../molecules/item-description/ItemDescription';
import { fetchItemById } from '../../../../application/redux/slices/itemsSlice';

const DetailsContent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [localCategories, setLocalCategories] = useState([]);

  const { itemById, loadingItemById, categories } = useSelector((state) => ({
    itemById: state.items.itemById,
    loadingItemById: state.items.loadingItemById,
    categories: state.items.categories,
  }));

  // Cargar el detalle del ítem
  useEffect(() => {
    if (id) {
      dispatch(fetchItemById(id));
    }
  }, [dispatch, id]);

  // Sincronizar categorías locales para evitar parpadeos
  useEffect(() => {
    if (categories.length > 0) {
      setLocalCategories(categories);
    }
  }, [categories]);

  const breadcrumbItems = localCategories.map((category) => ({
    label: category,
    href: `/items?search=${encodeURIComponent(category)}`,
  }));

  const { title, price, picture, condition, free_shipping, description } = itemById?.item || {};

  return (
    <div className="item-detail-page">
      <Breadcrumb items={breadcrumbItems} showBackButton />
      <div className="item-detail-page__content">
        <ItemImage loading={loadingItemById} picture={picture} title={title} />
        <ItemDetails
          loading={loadingItemById}
          title={title}
          condition={condition}
          free_shipping={free_shipping}
          price={price}
          onBuyClick={() => console.log('Comprar clickeado')}
        />
      </div>
      <ItemDescription loading={loadingItemById} description={description} />
    </div>
  );
};

export default DetailsContent;
