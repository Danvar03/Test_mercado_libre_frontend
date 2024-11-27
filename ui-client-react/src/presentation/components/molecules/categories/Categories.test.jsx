import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Categories from './Categories';

const renderCategories = (props) => render(<Categories {...props} />);

describe('Categories Component', () => {
    test('renders without crashing', () => {
        renderCategories({ categories: [] });
    });

    test('displays the title "Categorías"', () => {
        renderCategories({ categories: [] });
        expect(screen.getByText('Categorías')).toBeInTheDocument();
    });

    test('displays "No hay categorías disponibles" when categories list is empty', () => {
        renderCategories({ categories: [] });
        expect(screen.getByText('No hay categorías disponibles')).toBeInTheDocument();
    });

    test('displays a list of categories when categories are provided', () => {
        const categories = ['Electronics', 'Books', 'Clothing'];
        renderCategories({ categories });
        categories.forEach((category) => {
            expect(screen.getByText(category)).toBeInTheDocument();
        });
    });

    test('renders the correct number of categories', () => {
        const categories = ['Electronics', 'Books', 'Clothing'];
        renderCategories({ categories });
        expect(screen.getAllByRole('listitem')).toHaveLength(categories.length);
    });
});
