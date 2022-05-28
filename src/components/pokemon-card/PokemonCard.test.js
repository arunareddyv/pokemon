import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import PokemonCard from './PokemonCard';
import pokemonService from '../../service/PokemonService';
import StatusSpinner from '../sprinner/Spinner';

const data = {
    height: 10,
    weight: 20,
    abilities: [{
        ability: {
            name: 'abilityName'
        }
    }],
    sprites: {
        other: {
            dream_world: {

            }
        }
    }
}
let testInstance;
describe('PokemonCard', () => {
    beforeEach(() => {
        const testRenderer = TestRenderer.create(
            <PokemonCard name='Pokemon Name' url="http://domain/v2/pokemon/1" />
        );
        testInstance = testRenderer.root;
    })
    it('should have inProgress attribute true by default', () => {

        expect(testInstance.findByType(StatusSpinner).props.inProgress).toBeTruthy;

    })
    it('should render the pokemon details', () => {
        pokemonService.getAllPokemons = () => Promise.resolve({ data })
        expect(testInstance.findByType(PokemonCard).props.name).toBe('Pokemon Name');
    })

});
