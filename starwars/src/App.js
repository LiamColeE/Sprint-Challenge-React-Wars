import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios"
import CharacterList from "./components/CharacterList.js"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
    .get("https://swapi.co/api/films/1/")
    .then(res => {
      setCharacters(res.data.characters);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);


  if(!characters){
    return (
      <div className="App">
        <h1 className="Header">Loading...</h1>
      </div>
    )
  }
  else{
    console.log(characters);
  }
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
      <CharacterList links={characters}/>
    </div>
  );
}

export default App;
