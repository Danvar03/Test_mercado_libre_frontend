import React from 'react';
import './ItemList.scss';
import LogoShipping from '../../../assets/image/ic_shipping.png';
import { formatPrice } from '../../../../application/utils/formatPrice';

const ItemList = ({ items }) => (
  <div className="item-list">
    {items.length > 0 ? (
      items.map((item) => (
        <div key={item.id} className="item-card">
          <div className="item-card__image">
            <img src={item.picture} alt={item.title} />
          </div>
          <div className="item-card__details">
            <div className="item-card__price-container">
              <p className="item-card__price">{formatPrice(item.price)}</p>
              {item.free_shipping && (
                <img
                  src={LogoShipping}
                  alt="Free Shipping"
                  className="item-card__shipping"
                />
              )}
            </div>
            <h3 className="item-card__title">{item.title}</h3>
          </div>
        </div>
      ))
    ) : (
      <p>No se encontraron productos</p>
    )}
  </div>
);

export default ItemList;
