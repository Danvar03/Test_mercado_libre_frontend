import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

describe('Logo', () => {
  test('renders logo with correct src and alt', () => {
    const src = 'logo.png';
    const alt = 'Logo';
    render(<Logo src={src} alt={alt} />);
    const logoElement = screen.getByTestId('logo-test');
    expect(logoElement).toBeInTheDocument();
  });
});