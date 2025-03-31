import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(){
    console.log('Clicked first button');
  }

  const handleSecond = () => {
    console.log('Clicked second button');
  }

  const handleAddi

  return (
    <>
      <button onClick={handleClick}>First btn</button>
      <button onClick={handleSecond}>Second btn</button>
    </>
  )
}

export default App
