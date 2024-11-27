import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemDescription from '../ItemDescription';

describe('ItemDescription', () => {
  test('renders description when loading is false', () => {
    const descriptionText = 'This is a test description';
    render(<ItemDescription loading={false} description={descriptionText} />);

    expect(screen.getByText('Descripción del producto')).toBeInTheDocument();
    expect(screen.getByText(descriptionText)).toBeInTheDocument();
  });
});
