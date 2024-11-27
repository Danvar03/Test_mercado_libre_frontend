import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('Breadcrumb component', () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Subcategory', href: '/subcategory' },
  ];

  test('renders breadcrumb items correctly', () => {
    renderWithRouter(<Breadcrumb items={items} />);
    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  test('navigates to the correct URL on item click', () => {
    renderWithRouter(<Breadcrumb items={items} />);
    const categoryLink = screen.getByText('Category');
    fireEvent.click(categoryLink);
    expect(window.location.pathname).toBe('/items');
    expect(window.location.search).toBe('?search=Category');
  });

  test('applies active class to the selected item', () => {
    renderWithRouter(<Breadcrumb items={items} />);
    const categoryLink = screen.getByText('Category');
    fireEvent.click(categoryLink);
    expect(categoryLink).toHaveClass('breadcrumb__link--active');
  });

  test('does not navigate when clicking on a non-link item', () => {
    const itemsWithNonLink = [
      { label: 'Home', href: '/' },
      { label: 'Category' },
    ];
    renderWithRouter(<Breadcrumb items={itemsWithNonLink} />);
    const categoryText = screen.getByText('Category');
    fireEvent.click(categoryText);
    expect(window.location.pathname).toBe('/');
  });
});
