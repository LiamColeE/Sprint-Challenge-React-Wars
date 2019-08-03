import React, { useState, useEffect } from "react";
import axios from "axios"

const CharacterCard = (props) =>{
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
    .get(props.link)
    .then(res => {
      setInfo(res.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div class="Card">
      <h2>{info.name}</h2>
      <p>Born: {info.birth_year}</p>
      <p>Gender: {info.gender}</p>
      <p>Height: {info.height}</p>
      <p>Mass: {info.mass}</p>
      <p>URL: <a href={info.url}>{info.url}</a></p>

    </div>
  )
}

export default CharacterCard;
