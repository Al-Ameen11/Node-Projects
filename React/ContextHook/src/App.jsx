import { useState,createContext } from 'react'
import './App.css'
import User from './components/User.jsx'

export const themeContext = createContext();


function App() {
  
  const [theme,setTheme] = useState("Light");

  const toggleTheme =()=> {
      setTheme((curr)=>curr === "Light"?"dark":"Light");
   }

  return (
    <>
      <themeContext.Provider value={{
        theme
      }}>
      <h1>this is App</h1>
      <button onClick={toggleTheme}>Toggle Background</button>
      <User/>
      </themeContext.Provider>
    </>
  );
}

export default App
