import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState([])
  const [word, setWord] = useState('')

//   useEffect(() => {
//     axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${props.num}`)
//         .then((res) => {
//             console.log(res.data)
//             setPokemon(res.data.results)
//         })
//   }, [props.num])

  useEffect(() => {
    const getPokemon = async () => {
        let arrayOfPokemon = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?limit=${props.num}`
            );

        setPokemon(arrayOfPokemon.data.results);
        };

        getPokemon();
  }, []);

  const pokemonList = pokemon.map((poke) => 
  <li key={poke.name}>{poke.name}</li>)
  console.log(word)


  return(
    <ul>
        <input type="text" value={word} onChange={(e) => setWord(e.target.value)}/>
        {pokemonList}
    </ul>
  )
}

export default Pokemon
