import React, { useState, useEffect } from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard"
import { Card } from 'semantic-ui-react'

const CharacterList = (props) => {
  return (
    <Card.Group centered="true">
    {props.links.map(element => (<CharacterCard link={element} />))}
    </Card.Group>
  )
}

export default CharacterList;
