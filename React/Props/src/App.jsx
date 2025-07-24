import { useState } from 'react'
import User from './User'
function App() {
  
  const userData ={
    name:"ameen",
    age:20,
    gender:"male",
  }

  return (
    <>
    <h1>This is server</h1>
    {/* <User name={userData.name} age={user.age}/> */}
    <User {...userData}/>
    </>
  )
}

export default App
