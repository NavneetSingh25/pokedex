import axios from "axios";
import { useEffect,useState } from "react";

function usePokemon(url,type){

    const [pokemonState,setPokemonState]=useState({
        pokemonList:[],
        isloading:true,
        pokedexUrl:url,
        nextUrl:'',
        previousUrl:''
    });

    async function downloadPokemons(){
        setPokemonState((state)=>({...pokemonState,isloading:true}));
        const response=await axios.get(pokemonState.pokedexUrl);
        const pokemonresults=response.data.results;
        console.log(response.data);
        setPokemonState((state)=>({
            ...state,
            nextUrl:response.data.next,
            previousUrl:response.data.previous
        }));
        if(type){
            setPokemonState((state)=>({
                ...state,
                pokemonList:response.data.pokemon.slice(0,5)
            }));
        }else{
        const pokemonresultPromise=pokemonresults.map((pokemon)=>axios.get(pokemon.url));
        const pokemondata=await axios.all(pokemonresultPromise);
        console.log(pokemondata);
        const res=pokemondata.map((pokedata)=>{
            const pokemon=pokedata.data
            return {id:pokemon.id , name:pokemon.name , image:pokemon.sprites.other.dream_world.front_default , types:pokemon.types}
        })
        console.log(res);
        setPokemonState((state)=>({
            ...state,
            pokemonList:res,
            isloading:false
        }));
    }

    }
    useEffect(()=>{
        downloadPokemons();
    },[pokemonState.pokedexUrl]);
    return [pokemonState,setPokemonState];
}
export default usePokemon;