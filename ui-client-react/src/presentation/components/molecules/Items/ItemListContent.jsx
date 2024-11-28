import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from '@mui/material';
import './ItemListContent.scss';
import LogoShipping from '../../../assets/image/ic_shipping.png';
import { formatPrice } from '../../../../application/utils/formatPrice';
import { useNavigate } from 'react-router-dom';

const ItemListContent = ({ items, loading }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/items/${id}`);
  };

  return (
    <div className="item-list">
      {loading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <Card
            key={index}
            className="item-card"
            sx={{
              display: 'flex',
              marginBottom: 2,
              padding: 2,
              alignItems: 'center',
            }}
          >
            <Skeleton
              variant="rectangular"
              width={120}
              height={120}
              sx={{ marginRight: 2, borderRadius: 1, bgcolor: '#999' }}
            />
            <CardContent className="item-card__details" sx={{ flex: 1 }}>
              <Skeleton width="80%" height={24} sx={{ marginBottom: 1 }} />
              <Skeleton width="60%" height={20} sx={{ marginBottom: 1 }} />
              <Skeleton width="40%" height={32} />
            </CardContent>
          </Card>
        ))
      ) : items.length > 0 ? (
        items.map((item) => (
          <Card
            key={item.id}
            className="item-card"
            onClick={() => handleClick(item.id)}
            sx={{
              display: 'flex',
              marginBottom: 2,
              cursor: 'pointer',
              alignItems: 'center',
            }}
          >
            <CardMedia
              component="img"
              className="item-card__image"
              image={item.picture}
              alt={item.title}
              sx={{
                width: 120,
                height: 120,
                objectFit: 'cover',
                borderRadius: 1,
                marginRight: 2,
              }}
            />
            <CardContent className="item-card__details" sx={{ flex: 1 }}>
              <div className="item-card__price-container">
                <Typography
                  variant="h6"
                  className="item-card__price"
                  sx={{
                    fontWeight: 'bold',
                    marginBottom: 1,
                    fontSize: 16,
                  }}
                >
                  {formatPrice(item.price)}
                </Typography>
                {item.free_shipping && (
                  <img
                    src={LogoShipping}
                    alt="Free Shipping"
                    className="item-card__shipping"
                    style={{ marginLeft: 8 }}
                  />
                )}
              </div>
              <Typography
                variant="body1"
                className="item-card__title"
                sx={{ fontSize: 14, marginTop: 1 }}
              >
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body1" color="textSecondary">
          No se encontraron productos
        </Typography>
      )}
    </div>
  );
};

export default ItemListContent;
