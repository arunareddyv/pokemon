import { fireEvent, render,screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from "react-router"

import PokemonList from './PokemonListPage';

describe('PokemonListPage', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <PokemonList />
            </MemoryRouter>
        )
    })
    test('should have page title', () => {
        const titleValue = screen.getByText('Pokemon List');
        expect(titleValue).toBeInTheDocument();
    })
    test('should route to details page', () => {
        const linkElement = screen.getByText(/Details page/i);
        expect(linkElement).toBeInTheDocument();
    });
});
