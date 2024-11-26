import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const Categories = ({ categories }) => (
  <div style={{ padding: '20px' }}>
    <Typography variant="h5" gutterBottom>
      Categorías
    </Typography>
    {categories.length > 0 ? (
      <List>
        {categories.map((category, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
    ) : (
      <Typography variant="body1" color="textSecondary">
        No hay categorías disponibles
      </Typography>
    )}
  </div>
);

export default Categories;
