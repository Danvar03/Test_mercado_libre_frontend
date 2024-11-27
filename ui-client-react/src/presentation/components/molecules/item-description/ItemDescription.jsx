import React from 'react';
import { Skeleton } from '@mui/material';
import TypographyText from '../../atoms/text/TypographyText';

const ItemDescription = ({ loading, description }) => (
  <div className="item-detail-page__description">
    {loading ? (
      <>
        <Skeleton width="30%" height={30} />
        <Skeleton width="100%" height={80} />
      </>
    ) : (
      <>
        <TypographyText
          variant="h5"
          className="item-detail-page__description-title"
        >
          Descripción del producto
        </TypographyText>
        <TypographyText
          variant="body1"
          className="item-detail-page__description-text"
        >
          {description}
        </TypographyText>
      </>
    )}
  </div>
);

export default ItemDescription;
