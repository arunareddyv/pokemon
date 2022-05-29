import pokemonService from "../../service/PokemonService";

export default class PokemonListService {
    constructor(pageSizes) {
        this.init(pageSizes);
    }

    init = (pageSizes) => {
        this.pageData = { limit: pageSizes[0], offset: 0, next: undefined, previous: undefined }
    }
    get hasNext() { return this.pageData.next ? true : false }
    get hasPrevious() { return this.pageData.previous ? true : false }
    get limit() { return this.pageData.limit }
    set limit(value) { this.pageData.limit = value }

    getPokemonData = async (options = {}) => {
        const {isNext, isPrevious} = options;
        let url = undefined;
        if(isNext){
            url = this.pageData.next;
        }
        if(isPrevious){
            url = this.pageData.previous;
        }
        const { limit, offset } = this.pageData;
        return pokemonService.getAllPokemons({ limit, offset, url}).then(({ data }) => {
            const { next, previous, results } = data;
            this.pageData.next = next;
            this.pageData.previous = previous;
            return results;
        });
    }
}