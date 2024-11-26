import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemById } from '../../application/redux/slices/itemsSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Box, Typography, Grid } from '@mui/material';

const ItemDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemById, errorItemById } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItemById(id));
  }, [dispatch, id]);

  if (errorItemById) {
    return (
      <Typography color="error" variant="h6" align="center">
        Error: {errorItemById}
      </Typography>
    );
  }

  if (!itemById || !itemById.item) {
    return (
      <Typography variant="h6" align="center">
        Loading...
      </Typography>
    );
  }

  const { title, price, picture, condition, free_shipping, description } =
    itemById.item;

  return (
    <Box sx={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Back Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(-1)}
        sx={{ marginBottom: '20px' }}
      >
        Back
      </Button>

      {/* Main Layout */}
      <Grid container spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              padding: '20px',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={picture}
              alt={title}
              style={{
                maxWidth: '100%',
                maxHeight: '400px',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
            {`${condition === 'new' ? 'Nuevo' : 'Usado'} - ${free_shipping ? 'Envío gratis' : ''}`}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            {title}
          </Typography>
          <Typography
            variant="h3"
            color="primary"
            sx={{ fontWeight: 'bold', marginBottom: 4 }}
          >
            {price.currency} {price.amount.toLocaleString()}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: '10px 20px',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Comprar
          </Button>
        </Grid>
      </Grid>

      {/* Description Section */}
      <Box sx={{ marginTop: '40px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Descripción del producto
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ItemDetailPage;
