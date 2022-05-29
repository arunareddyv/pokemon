import PokemonListService from "./PokemonListService";
import pokemonService from "../../service/PokemonService";

let pokemonListService;
describe("PokemonListService", () => {
    beforeEach(() => {
        pokemonListService = new PokemonListService([[10, 20, 50]]);
        pokemonService.getAllPokemons = () => Promise.resolve({
            data: {
                next: "http://next",
                previous: "http://pervious",
                results: []
            }
        })
        pokemonService.getPokemonByFilter = () => Promise.resolve({
            data: {
                next: null,
                previous: null,
                results: []
            }
        })
    })
    describe("constructor", () => {
        it("should have default pagination values", () => {
            expect(pokemonListService.hasNext).toBeFalsy
            expect(pokemonListService.hasPrevious).toBeFalsy
        })
    })

    describe("getPokemonData", () => {
        it("should return next value", async () => {
          const response = await pokemonListService.getPokemonData();
          expect(pokemonListService.hasNext).toBeTruthy
          expect(pokemonListService.hasPrevious).toBeTruthy
        })
    })

    describe("filter", () => {
        it("should return next value", async () => {
          const response = await pokemonListService.filter({});
          expect(pokemonListService.hasNext).toBeFalsy
          expect(pokemonListService.hasPrevious).toBeFalsy
        })
    })
})