import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'

const AppStyle = styled.h1`
  color: black;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 5%;
  width: 55%;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: gold;
    color: white;
  }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people')
      .then((res) => {
        setCharacters(res.data.results)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className='App'>
      <AppStyle className='Header'>Star Wars Characters</AppStyle>
      {characters?.map((character) => {
        return <Character data={character} key={character.name} />
      })}
    </div>
  )
}

export default App
