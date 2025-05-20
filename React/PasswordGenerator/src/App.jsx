import { useCallback, useState ,useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  
  const [numberAllowed, setNumberAllowed] = useState('false')
  
  const [charAllowed, setCharAllowed] = useState('false')
  
  const [password, setPassword] = useState('')

  const passwordRef = useRef('null')

  const generatePassword = useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIHKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)

  },[length, numberAllowed, charAllowed])


  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  useEffect(()=>{
    generatePassword()
  },[length ,numberAllowed ,charAllowed])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg bg-gray-800 my-3 mx-auto px-4 py-3'>

        <h1 className='text-center text-white my-3'>
        Password Generator
        </h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>
        
        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-2 text-orange-500'>
            <input 
            type="range" 
            name="" 
            id="" 
            className='cursor-pointer'
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length: {length}</label>
            </div>

            <div className='flex items-center gap-x-2 text-orange-500'>
            <input 
            type="checkbox" 
            name="" 
            id="" 
            defaultChecked={numberAllowed}
            onChange={()=>
              {setNumberAllowed((prev)=>!prev)}}
            />
            <label htmlFor="number">Numbers</label>
            </div>

            <div className='flex items-center gap-x-2 text-orange-500'>
            <input 
            type="checkbox" 
            name="" 
            id="" 
            defaultChecked={charAllowed}
            onChange={()=>
              {setCharAllowed((prev)=>!prev)}}
            />
            <label htmlFor="characters">Characters</label>
            </div>

        </div>

      </div>
    </>
  )
}

export default App












