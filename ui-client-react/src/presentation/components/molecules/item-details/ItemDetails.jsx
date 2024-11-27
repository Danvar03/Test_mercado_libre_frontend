import React from 'react';
import { Skeleton } from '@mui/material';
import ButtonPrimary from '../../atoms/button/ButtonPrimary';
import TypographyText from '../../atoms/text/TypographyText';

const ItemDetails = ({
  loading,
  title,
  condition,
  free_shipping,
  price,
  onBuyClick,
}) => (
  <div className="item-detail-page__details">
    {loading ? (
      <>
        <Skeleton width="80%" height={30} />
        <Skeleton width="60%" height={40} />
        <Skeleton width="40%" height={30} />
      </>
    ) : (
      <>
        <TypographyText variant="body2" className="item-detail-page__condition">
          {`${condition === 'new' ? 'Nuevo' : 'Usado'} ${
            free_shipping ? ' - Envío gratis' : ''
          }`}
        </TypographyText>
        <TypographyText
          variant="h6"
          className="item-detail-page__title"
          sx={{ fontWeight: 'bold', marginBottom: 1 }}
        >
          {title}
        </TypographyText>
        <TypographyText
          variant="h5"
          className="item-detail-page__price"
          sx={{ fontWeight: 'bold', color: '#1976d2' }}
        >
          {price?.currency} {price?.amount?.toLocaleString()}
        </TypographyText>
      </>
    )}

    <ButtonPrimary
      onClick={onBuyClick}
      disabled={!title}
      sx={{
        fontSize: '14px',
        fontWeight: 'bold',
        borderRadius: '8px',
        width: '100%',
      }}
    >
      Comprar
    </ButtonPrimary>
  </div>
);

export default ItemDetails;
