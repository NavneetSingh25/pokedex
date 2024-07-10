
import Pokemon from "../pokemon/pokemon";
import './pokemonList.css'
import usePokemon from "../../hooks/usePokemon";
function PokemonList() {

    //const [pokemonList,setPokemonList]=useState([]);
    //const [isloading,setIsloading]=useState(true);
    //const [pokedexUrl,setPokedexUrl]=useState('https://pokeapi.co/api/v2/pokemon');
    //const [nextUrl,setnextUrl]=useState('');
    //const [previousUrl,setpreviousUrl]=useState('');
    const {pokemonState,setPokemonState}=usePokemon('https://pokeapi.co/api/v2/pokemon',true);
    return (
        <>
            <div className="pokemon-list-wrapper">
                <div className="pokemon-wrapper">
                {(pokemonState.isloading) ?'  loading..':
                    pokemonState.pokemonList.map((p)=><Pokemon name={p.name} image={p.image} id={p.id} />)
                }
                </div>
                <div className="controls">
                    <button disabled={pokemonState.previousUrl==null} onClick={()=>{
                        const urlToset=pokemonState.previousUrl;
                        setPokemonState({...pokemonState,pokedexUrl:urlToset});
                    }}>Prev</button>
                    <button disabled={pokemonState.nextUrl==null} onClick={()=>{
                        const urltoset=pokemonState.nextUrl;
                        setPokemonState({...pokemonState,pokedexUrl:urltoset});
                    }}>Next</button>

                </div>
            </div>
        </>
    );
}
export default PokemonList;