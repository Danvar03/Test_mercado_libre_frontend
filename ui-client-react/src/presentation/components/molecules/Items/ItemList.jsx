import React from "react";

const formatPrice = (price) => {
  if (!price) return "N/A";
  return `${price.currency} ${price.amount}.${price.decimals}`;
};

const ItemList = ({ items }) => (
  <div>
    <h2>Productos</h2>
    {items.length > 0 ? (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <p>
              <strong>{item.title}</strong>
            </p>
            <p>Precio: {formatPrice(item.price)}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No se encontrarón productos</p>
    )}
  </div>
);

export default ItemList;
