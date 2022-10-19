import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {
  const [pokeForm, setPokeForm] = useState({
    name : "",
    hp : "",
    frontUrl: "",
    backUrl: "",
  })

  function handleChange(e){
    const {name, value} = e.target
   
    setPokeForm({...pokeForm, [name]: value})
  }

  function handleSubmit(e){
    e.preventDefault()
    
    const pokeSubmit = {
      name: pokeForm.name,
      hp: pokeForm.hp,
      sprites: {
        front: pokeForm.frontUrl,
        back: pokeForm.backUrl
      }
    }

    fetch("http://localhost:3001/pokemon", {
      method : "POST",
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pokeSubmit)
    })
    .then(res => res.json())
    .then(data => addPokemon(data))
   
    setPokeForm({
      name : "",
      hp : "",
      frontUrl: "",
      backUrl: "",
    })
  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange} value={pokeForm.name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange} value={pokeForm.hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={pokeForm.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={pokeForm.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
