import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TypographyText from '../TypographyText';

describe('TypographyText', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<TypographyText>Test Text</TypographyText>);
    expect(getByText('Test Text')).toBeInTheDocument();
  });

  it('applies the correct variant', () => {
    const { getByText } = render(
      <TypographyText variant="h1">Test Text</TypographyText>
    );
    expect(getByText('Test Text')).toHaveClass('MuiTypography-h1');
  });

  it('applies additional class names', () => {
    const { getByText } = render(
      <TypographyText className="custom-class">Test Text</TypographyText>
    );
    expect(getByText('Test Text')).toHaveClass('typography-text');
    expect(getByText('Test Text')).toHaveClass('custom-class');
  });

  it('passes additional props to the Typography component', () => {
    const { getByText } = render(
      <TypographyText data-testid="typography">Test Text</TypographyText>
    );
    expect(getByText('Test Text')).toHaveAttribute('data-testid', 'typography');
  });
});
