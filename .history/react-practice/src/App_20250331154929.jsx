import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(){
    console.log('Clicked first button');
    
  }

  return (
    <>
      <button onClick={handleClick}>Fir</button>
    </>
  )
}

export default App
