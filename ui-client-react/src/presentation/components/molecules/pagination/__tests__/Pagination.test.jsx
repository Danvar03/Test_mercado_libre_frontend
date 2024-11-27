import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../Pagination';
import '@testing-library/jest-dom';

describe('Pagination Component', () => {
  const pagination = { page: 1, totalPages: 5 };
  const onPageChange = jest.fn();

  test('renders pagination component', () => {
    render(<Pagination pagination={pagination} onPageChange={onPageChange} />);
    expect(screen.getByText('Página 1 de 5')).toBeInTheDocument();
  });
});
