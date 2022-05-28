import { fireEvent, render,screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from "react-router"

import PokemonDetails from './PokemonDetailsPage';

describe('PokemonListPage', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <PokemonDetails />
            </MemoryRouter>
        )
    })
    test('should route to details page', () => {
        const linkElement = screen.getByText(/Back/i);
        expect(linkElement).toBeInTheDocument();
    });
});
