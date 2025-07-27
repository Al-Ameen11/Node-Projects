import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('purple')

  function changeColor(color){
    setColor(color)
  }

  return (
    <>

    <div className='w-full h-screen duration-300' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2'>
        <div className='flex flex-wrap justify-center gap-3 '>
          <button className='border border-black px-7 py-2 border-2 rounded-xl' onClick={()=>changeColor('red')}>Red</button>
          <button className='border border-black px-7 py-2 border-2 rounded-xl' onClick={()=>changeColor('blue')}>Blue</button>
          <button className='border border-black px-7 py-2 border-2 rounded-xl' onClick={()=>changeColor('green')}>Green</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default App;
