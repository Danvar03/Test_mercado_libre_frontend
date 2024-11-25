import React from 'react';

const Categories = ({ categories }) => (
  <div>
    <h2>Categorias</h2>
    {categories.length > 0 ? (
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    ) : (
      <p>No hay categorias disponible</p>
    )}
  </div>
);

export default Categories;
