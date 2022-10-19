import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeList}) {
  
  const renderedPoke = pokeList.map((pokemon) => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {renderedPoke}
    </Card.Group>
  );
}

export default PokemonCollection;
