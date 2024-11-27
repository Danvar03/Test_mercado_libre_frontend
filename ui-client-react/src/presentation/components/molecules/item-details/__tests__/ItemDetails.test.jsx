import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemDetails from '../ItemDetails';

jest.mock('../../../atoms/button/ButtonPrimary', () => (props) => (
    <button {...props}>{props.children}</button>
));

jest.mock('../../../atoms/text/TypographyText', () => (props) => (
    <div {...props}>{props.children}</div>
));

const renderItemDetails = (customProps = {}) => {
    const defaultProps = {
        loading: false,
        title: 'Test Item',
        condition: 'new',
        free_shipping: true,
        price: { currency: 'USD', amount: 100 },
        onBuyClick: jest.fn(),
        ...customProps, 
    };

    return {
        ...render(<ItemDetails {...defaultProps} />),
        defaultProps, 
    };
};

describe('ItemDetails', () => {
    it('renders item details when loading is false', () => {
        renderItemDetails();
        expect(screen.getByText('Nuevo - Envío gratis')).toBeInTheDocument();
        expect(screen.getByText('Test Item')).toBeInTheDocument();
        expect(screen.getByText('USD 100')).toBeInTheDocument();
    });

    it('calls onBuyClick when Comprar button is clicked', () => {
        const { defaultProps } = renderItemDetails();
        fireEvent.click(screen.getByText('Comprar'));
        expect(defaultProps.onBuyClick).toHaveBeenCalled();
    });

    it('disables Comprar button when title is not provided', () => {
        renderItemDetails({ title: '' });
        expect(screen.getByText('Comprar')).toBeDisabled();
    });
});
