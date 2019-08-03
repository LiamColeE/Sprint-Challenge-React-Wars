import React, { useState, useEffect } from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard"

const CharacterList = (props) => {
  return (
    props.links.map(element => (<CharacterCard link={element} />))
  )
}

export default CharacterList;
