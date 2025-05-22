import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {

  const [length,setLength] = useState(6)

  const [numberAllowed,setNumberAllowed] = useState(false)

  const [charAllowed,setCharAllowed] = useState(false)

  const [password,setPassword] = useState('')

  const passRef = useRef('null')

const generatePassword =useCallback(()=>{

  let pass =""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz"
  if(numberAllowed) str+="1234567890"
  if(charAllowed) str+="!@#$%^&*()_+"

  for(let i=0;i<length;i++){
    pass+=str.charAt(Math.floor(Math.random() * str.length))
  }
    setPassword(pass)
},[length,numberAllowed,charAllowed])

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed])

  const copyPasswordToClipboard = ()=> {
    window.navigator.clipboard.writeText(password)
    passRef.current.select()
  }

  return (
    <>
      <div className='w-full max-w-md bg-gray-800 px-4 py-2 rounded shadow-lg'>
        <h1 className='text-white text-center py-3 text-lg'>Password Generator</h1>
        <div className='flex py-2 justify-center'>
          <input type="text"
          placeholder='Password'
          className='px-2 py-1.7 grow outline-none'
          value={password}
          readOnly
          ref={passRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='bg-blue-700 px-4 py-1.5 text-white'>copy</button>
        </div>
        <div className=' flex text-orange-400 text-sm gap-2'>

          <div className='flex gap-2'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e)=>setLength(e.target.value)}
           />
           <label htmlFor="length">Length : {length}</label>
          </div>
          <div className='flex gap-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={()=>setNumberAllowed((prev)=>!prev)
            }
           />
           <label htmlFor="charAllowed">
            Numbers
           </label>
          </div>
          <div className='flex gap-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={()=>setCharAllowed((prev)=>!prev)}
           />
           <label htmlFor="charAllowed">
            Characters
           </label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App;




