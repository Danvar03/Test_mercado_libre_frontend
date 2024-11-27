import React from 'react';
import { Skeleton, CardMedia } from '@mui/material';

const ItemImage = ({ loading, picture, title }) => (
  <div className="item-detail-page__image-container">
    {loading ? (
      <Skeleton
        variant="rectangular"
        width={150}
        height={150}
        className="item-card__image"
      />
    ) : (
      <CardMedia
        component="img"
        className="item-card__image"
        image={picture}
        alt={title || 'Producto'}
        sx={{
          width: 150,
          height: 150,
          objectFit: 'cover',
          backgroundColor: 'transparent',
        }}
      />
    )}
  </div>
);

export default ItemImage;
