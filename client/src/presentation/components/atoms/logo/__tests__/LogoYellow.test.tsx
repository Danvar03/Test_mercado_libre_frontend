import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LogoYellow from '..';

describe('LogoYellow Component', () => {
  it('should render the logo with the provided src and alt attributes', () => {
    const { getByAltText } = render(
      <LogoYellow
        src="logo.png"
        alt="Mercado Libre Colombia - Donde comprar y vender de todo"
      />
    );
    const imgElement = getByAltText(
      'Mercado Libre Colombia - Donde comprar y vender de todo'
    );
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'logo.png');
  });
});
