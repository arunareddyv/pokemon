import axios from 'axios';

class PokemonService {
    constructor() {
        this.host = 'https://pokeapi.co/api/v2';
    }

    async getAllPokemons(request = {}) {
        const { limit = 20, offset = 0, url = undefined } = request;
        return axios.get(url || `${this.host}/pokemon?limit=${limit}&offset=${offset}`);
    }

    async getPokemonDetails(url) {
        return axios.get(url);
    }
}

const pokemonService = new PokemonService();
export default pokemonService;