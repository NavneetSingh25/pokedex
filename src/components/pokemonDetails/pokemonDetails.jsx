import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import './pokemonDetails.css';
import usePokemon from "../../hooks/usePokemon";

function PokemonDetails() {
    const {id}=useParams();
    const [pokemon,setPokemon]=useState({});
    async function downloadPokemon(){
        const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t)=>t.type.name)
        })
    }
        const{pokemonState}=usePokemon('https://pokeapi.co/api/v2/type/fire',false);

        useEffect(()=>{
        downloadPokemon();
    },[]);

    return(
        <div className="pokemonDetails-wrapper">
             <img className="pokemon-image" src={pokemon.image}/>
            <div className="pokemon-name"><span>{pokemon.name}</span></div>
            <div className="pokemon-name">Height:{pokemon.height}</div>
            <div className="pokemon-name">weight:{pokemon.weight}</div>
            <div className="pokemon-types">
                {pokemon.types && pokemon.types.map((t)=><div key={t}>{t}</div>)}
            </div>
            <div>
                More fire types
                <ul>
                    {pokemonState.pokemonList && pokemonState.pokemonList.map((p)=><li key={p.pokemon.url}>{p.pokemon.name}</li>)}
                </ul>
            </div>
        </div>
    );
}
export default PokemonDetails;