import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeList, setPokeList] = useState([])
  const [searchInput, setSearchInput] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(data => setPokeList(data))
  },[])
  
  function addPokemon(newPoke){
    setPokeList([...pokeList, newPoke])
  }

  function handleSearch(input){
    setSearchInput(input)
  }
  
  const searchedPoke = pokeList.filter((pokemon) => {
    return pokemon.name.includes(searchInput)
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokeList={searchedPoke}/>
    </Container>
  );
}

export default PokemonPage;
