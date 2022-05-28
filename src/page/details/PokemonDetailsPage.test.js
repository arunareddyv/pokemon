import { MemoryRouter } from "react-router"
import TestRenderer from 'react-test-renderer';

import React from 'react';
import PokemonDetails from './PokemonDetailsPage';
import pokemonService from '../../service/PokemonService'

let testInstance;
describe('PokemonListPage', () => {

    beforeEach(async () => {
        const testRenderer = TestRenderer.create(
            <MemoryRouter>
                <PokemonDetails />
            </MemoryRouter>
        );
        testInstance = testRenderer.root;
    })
    test('should initiate the component', async () => {
        expect(testInstance.findByType(PokemonDetails)).toBeTruthy
    });
});
