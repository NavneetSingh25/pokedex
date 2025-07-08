// CSS imports
import { useState } from 'react';
import PokemonList from '../pokemonList/pokemonList';
import Search from '../search/search';
import './pokedex.css';
import PokemonDetails from '../pokemonDetails/pokemonDetails';

function Pokedex() {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='pokedex-wrapper'>
            <h1>POKEDEX</h1>
            <Search updateSearchTerm={setSearchTerm} />
            {searchTerm ? <PokemonDetails pokemonName={searchTerm} /> : <PokemonList />}
        </div>
    )
}

export default Pokedex;
