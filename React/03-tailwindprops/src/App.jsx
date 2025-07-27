import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {

  return (
    <>
      <h1 className='text-2xl bg-blue-800 text-white p-2 rounded-lg'>this is a tailwind</h1>
      <Card username="Al Ameen"/>
      <Card username ="Humaira"/>
    </>
  )
}

export default App;

