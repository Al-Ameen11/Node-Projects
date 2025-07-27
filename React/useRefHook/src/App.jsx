import { useRef, useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const countRef = useRef();

  const handleCountRef =()=>{
    countRef.current.focus();
  }

  return (
    <>
    <input type="text" ref={countRef}/>
      <h1>{count}</h1>
      <button onClick={()=>setCount((curr)=>curr+1)}>state count</button>
      <button onClick={handleCountRef}>ref count</button>
    </>
  );
}

export default App;
