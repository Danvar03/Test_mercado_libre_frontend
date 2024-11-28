import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  test('renders footer text', () => {
    const { getByText } = render(<Footer />);
    const footerText = getByText('Mercado-Libre 2024 Daniela Vargas');
    expect(footerText).toBeInTheDocument();
  });

  test('renders GitHub link', () => {
    const { getByText } = render(<Footer />);
    const githubLink = getByText('GitHub');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/Danvar03/Test_mercado_libre_frontend'
    );
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});