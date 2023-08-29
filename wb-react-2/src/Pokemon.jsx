import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${props.num}`)
        .then((res) => {
            console.log(res.data)
            setPokemon(res.data.results)
        })
  }, [props.num])

  const pokemonList = pokemon.map((poke) => <li>{poke.name}</li>)


  return(
    <ul>
        {pokemonList}
    </ul>
  )
}

export default Pokemon
