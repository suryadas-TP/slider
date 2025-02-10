import React from 'react'
import './App.css'
import Slider from './Components/Slider'
import { destinations } from './Components/Data'
function App() {
  return (
    <div className='app'>
      <div className='top-content'>
        <h2>Choose Your Destination</h2>
      </div>
      <Slider data={destinations}/>
    </div>
  )
}

export default App
