import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = () =>{
const [pokemonList, setPokemonList] = useState([]);
const getPokemon = () => {

    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
    .then((res) => {
        console.log(res);
        setPokemonList(res.data.results);
    })
    .catch((err) => {
        console.log(err);
    })
}
    return(
    <div>
    <button onClick={getPokemon}>Lista de todos los Pokemones</button>
    {pokemonList.map((pokemon, index)=> (
            <div key={index}><p>{pokemon.name}</p></div>
        ))}
        
    </div>
)
}
export default Pokemon;

