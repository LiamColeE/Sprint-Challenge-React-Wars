import React, { useState, useEffect } from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard"
import { Button, Card, Image } from 'semantic-ui-react'

const CharacterList = (props) => {
  return (
    <Card.Group centered="true">
    {props.links.map(element => (<CharacterCard link={element} />))}
    </Card.Group>
  )
}

export default CharacterList;
