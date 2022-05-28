import axios from "axios";

import pokemonService from "./PokemonService";

jest.mock("axios");

describe('pokemonService', () => {
    beforeAll(() => {
        axios.get.mockResolvedValueOnce({});
    })
    describe('getAllPokemons', () => {
        test('should return all pokemons with first page without any parameters', async () => {
            await pokemonService.getAllPokemons();
            expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
        })

        test('should call with passed URL', async () => {
            await pokemonService.getAllPokemons({url: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=20'});
            expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20');
        })
    })
    
    describe('getPokemonDetails', () => {
        test('should call with passed URL', async () => {
            await pokemonService.getPokemonDetails('https://pokeapi.co/api/v2/pokemon/1');
            expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1');
        })
    })
})