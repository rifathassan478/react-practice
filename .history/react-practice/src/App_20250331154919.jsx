import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(){
    console.log('Clic');
    
  }

  return (
    <>
      <button onClick={handleClick}></button>
    </>
  )
}

export default App
