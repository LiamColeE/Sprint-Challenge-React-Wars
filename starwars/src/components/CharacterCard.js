import React, { useState, useEffect } from "react";
import axios from "axios"
import { Card } from 'semantic-ui-react'

const CharacterCard = (props) => {
  const [info, setInfo] = useState();

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

  if (!info) {
    return (
      <Card>
        <h1>Loading...</h1>
      </Card>
    )
  }

  return (
    <Card href={info.url}>
      <Card.Content>
        <Card.Header>{info.name}</Card.Header>
        <Card.Description>Born: {info.birth_year}</Card.Description>
        <Card.Description>Gender: {info.gender}</Card.Description>
        <Card.Description>Height: {info.height}</Card.Description>
        <Card.Description>Mass: {info.mass}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default CharacterCard;
