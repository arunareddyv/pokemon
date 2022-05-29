import pokemonService from "../../service/PokemonService";

export default class PokemonListService {
    constructor(pageSizes) {
        this.pageSizes = pageSizes;
        this.init();
    }

    init = () => {
        this.pageData = { limit: this.pageSizes[0], offset: 0, next: undefined, previous: undefined }
    }
    get hasNext() { return this.pageData.next ? true : false }
    get hasPrevious() { return this.pageData.previous ? true : false }
    get limit() { return this.pageData.limit }
    set limit(value) { this.pageData.limit = value }

    getURL(options) {
        const { isNext } = options;
        return isNext ? this.pageData.next : this.pageData.previous;
    }
    getPokemonData = async (options = {}) => {
        let url = this.getURL(options);
        const { limit, offset } = this.pageData;
        return pokemonService.getAllPokemons({ limit, offset, url }).then(({ data }) => {
            this.setData(data);
            return data.results;
        });
    }

    filter({ type, text }) {
        this.init();
        return pokemonService.getPokemonByFilter({ type, text }).then(({ data }) => {
            if (type === 'ability') {
                return data.pokemon.map(value => {
                    const { name, url } = value.pokemon;
                    return { name, url }
                });
            } else {
                return data
            }

        });
    }

    setData = ({ next, previous }) => {
        this.pageData.next = next;
        this.pageData.previous = previous;
    }
}