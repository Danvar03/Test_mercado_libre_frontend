import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonPrimary from '../ButtonPrimary';

const renderButtonPrimary = (props) => {
  return render(<ButtonPrimary {...props} />);
};

describe('ButtonPrimary', () => {
  test('renders the button with children', () => {
    renderButtonPrimary({ children: 'Buscar' });
    const buttonElement = screen.getByText(/Buscar/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    renderButtonPrimary({ onClick: handleClick, children: 'Buscar' });
    const buttonElement = screen.getByText(/Buscar/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    renderButtonPrimary({ disabled: true, children: 'Buscar' });
    const buttonElement = screen.getByText(/Buscar/i);
    expect(buttonElement).toBeDisabled();
  });

  test('applies additional props to the button', () => {
    renderButtonPrimary({ 'data-testid': 'custom-button', children: 'Buscar' });
    const buttonElement = screen.getByTestId('custom-button');
    expect(buttonElement).toBeInTheDocument();
  });
});
