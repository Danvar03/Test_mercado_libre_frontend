import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonAtom from '../ButtonAtom';

describe('ButtonAtom', () => {
  const renderButton = (props = {}) => {
    const defaultProps = {
      icon: <span>Icon</span>,
      ...props,
    };
    render(<ButtonAtom {...defaultProps} />);
  };

  it('renders the button with the provided icon', () => {
    renderButton();
    const iconElement = screen.getByText('Icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    renderButton({ onClick: handleClick });
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies default styles', () => {
    renderButton();
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({
      backgroundColor: 'rgb(255, 215, 0)',
      borderRadius: '0 4px 4px 0',
      padding: '8px',
    });
  });

  it('changes background color on hover', () => {
    renderButton();
    const button = screen.getByRole('button');
    fireEvent.mouseOver(button);
    expect(button).toHaveStyle('background-color: #ffd700');
  });
});
