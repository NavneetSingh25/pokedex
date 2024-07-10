import PokemonList from "../pokemonList/pokemonList";
import Search from "../search/search";
import './pokedex.css'
function Pokedex() {

    return (
        <div className="pokedex-wrapper">
            <Search/>
            <PokemonList/>
        </div>
    );
}

export default Pokedex;

