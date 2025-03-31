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

  const handleAdding = (num) => {
    console.log(num+5);
    
  }

  return (
    <>
      <button onClick={handleClick}>First btn</button>
      <button onClick={handleSecond}>Second btn</button>
      <button onClick={()=> handleAdding(10)}>Add 5 to 10 </button>
  
    </>
  )
}

export default App
