import { fireEvent, render,screen } from '@testing-library/react';
import React from 'react';

import PokemonCard from './PokemonCard';

describe('PokemonCard', () => {
    beforeEach(() => {
        render(
           <PokemonCard />
        )
    })
    test('should have card title', () => {
        const titleValue = screen.getByText('Pokemon name');
        expect(titleValue).toBeInTheDocument();
    })
    
});
