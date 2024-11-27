import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomAtom from '../CustomTextField';

const renderCustomAtom = (props) => {
  render(<CustomAtom {...props} />);
};

describe('CustomAtom', () => {
  test('should render correctly with basic properties', () => {
    renderCustomAtom({
      name: 'test-input',
      placeholder: 'Escribe aquí...',
      defaultValue: 'Valor por defecto',
    });

    const input = screen.getByPlaceholderText('Escribe aquí...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'test-input');
    expect(input).toHaveValue('Valor por defecto');
  });

  test('should apply full width style by default', () => {
    renderCustomAtom({
      name: 'fullWidth-test',
      placeholder: 'Prueba',
    });

    const input = screen.getByPlaceholderText('Prueba');
    expect(input).toBeInTheDocument();
    expect(input).toHaveStyle('width: 100%');
  });

  test('should accept additional properties', () => {
    renderCustomAtom({
      name: 'additional-props',
      placeholder: 'Props extra',
      'data-testid': 'custom-atom',
    });

    const input = screen.getByTestId('custom-atom');
    expect(input).toBeInTheDocument();
  });
});
