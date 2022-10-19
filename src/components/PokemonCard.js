import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [isClicked, setIsClicked] = useState(false)
  const {name, hp, sprites} = pokemon

  function handleClick(){
    setIsClicked(!isClicked)
  }

  let pokeSprite
  if(!isClicked){
    pokeSprite = sprites.front
  }
  else{
    pokeSprite = sprites.back
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={pokeSprite} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
