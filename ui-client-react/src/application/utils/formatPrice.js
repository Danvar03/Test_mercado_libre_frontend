export const formatPrice = (price) => {
  if (!price) return 'N/A';
  return `${price.currency} ${price.amount.toLocaleString('es-AR', {
    minimumFractionDigits: 2,
  })}`;
};
