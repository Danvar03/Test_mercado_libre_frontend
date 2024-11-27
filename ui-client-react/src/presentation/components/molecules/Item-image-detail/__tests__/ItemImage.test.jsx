import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemImage from '../ItemImage';

const renderItemImage = (customProps = {}) => {
  const defaultProps = {
    loading: false,
    picture: 'test.jpg',
    title: 'Test Title',
    ...customProps,
  };

  return render(<ItemImage {...defaultProps} />);
};

describe('ItemImage Component', () => {
  test('renders CardMedia when loading is false', () => {
    renderItemImage({ loading: false });

    const cardMedia = screen.getByRole('img', { name: /Test Title/i });
    expect(cardMedia).toBeInTheDocument();
    expect(cardMedia).toHaveClass('item-card__image');
    expect(cardMedia).toHaveAttribute('src', 'test.jpg');
    expect(cardMedia).toHaveAttribute('alt', 'Test Title');
  });

  test('renders CardMedia with default alt text when title is not provided', () => {
    renderItemImage({ loading: false, title: undefined });

    const cardMedia = screen.getByRole('img', { name: /Producto/i });
    expect(cardMedia).toBeInTheDocument();
    expect(cardMedia).toHaveClass('item-card__image');
    expect(cardMedia).toHaveAttribute('src', 'test.jpg');
    expect(cardMedia).toHaveAttribute('alt', 'Producto');
  });
});
