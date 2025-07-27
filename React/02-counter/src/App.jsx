import { useState } from 'react';
import './App.css';

function App() {
 const [counter,setCounter] = useState(15);
 const addValue = ()=>{
  // setCounter((prevCounter)=>prevCounter+1) : if we increare it just put 2 0r 4 like that,but callback via access the previous value 
  setCounter(counter+1);
 }
 const removeValue = ()=>{
  setCounter(counter-1);
 }
  return (
    <>
      <h1 className='text-2xl '>counter:{counter}</h1>
      <h2>Ameen Counter:{counter}</h2>
      <button onClick={addValue}>Add a value</button>{" "}
      <button onClick={removeValue}> Remove a value</button>
      <footer>counter :{counter}</footer>
    </>
  )
}

export default App;

