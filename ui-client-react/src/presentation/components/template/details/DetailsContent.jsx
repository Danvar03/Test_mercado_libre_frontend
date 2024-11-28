import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../molecules/breadcrumb/Breadcrumb';
import ItemDetails from '../../molecules/item-details/ItemDetails';
import ItemImage from '../../molecules/Item-image-detail/ItemImage';
import ItemDescription from '../../molecules/item-description/ItemDescription';
import { fetchItemById } from '../../../../application/redux/slices/itemsSlice';
import useCategories from '../../../../application/hooks/useCategories';
import useItemSearch from '../../../../application/hooks/useItemSearch';

const DetailsContent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { itemById, loadingItemById } = useSelector((state) => state.items);
  const { categories, loading, error } = useItemSearch();
  const { breadcrumbItems } = useCategories(categories, loading, error);

  useEffect(() => {
    dispatch(fetchItemById(id));
  }, [dispatch, id]);

  const { title, price, picture, condition, free_shipping, description } =
    itemById?.item || {};

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