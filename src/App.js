import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Character from "./components/Character";

const App = () => {

  const [characters, setCharacters] = useState([])
  console.log("It Rendered!")

  useEffect(()=>{
    console.log("this runs after the first render")
    axios.get("https://swapi.dev/api/people/")
    .then((res) => {
      console.log(res.data)
      setCharacters(res.data)
    })
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map((character, index)=>(
          <Character 
          key = {`App-Charachters-Map-${character.name}-${index}`}
          character={character}
          />
        ))
      }   
    </div>
  );
} 

export default App;
