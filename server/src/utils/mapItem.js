export const mapItem = (item, additionalFields = {}) => ({
  id: item.id,
  title: item.title,
  price: {
    currency: item.currency_id,
    amount: Math.floor(item.price),
    decimals: Math.round((item.price % 1) * 100),
  },
  picture: item.thumbnail,
  condition: item.condition,
  free_shipping: item.shipping?.free_shipping || false,
  ...additionalFields,
});
