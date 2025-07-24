import React from 'react'
import { useContext } from 'react'
import { themeContext} from '../App.jsx'


function user() {
  
  const {theme} = useContext(themeContext);
  
  const textColor={
    backgroundColor:theme === 'Light'?"white":"black",
    color:theme === 'Light'?"black":"white"
  }

  return (
    <div>

    <h1 style={textColor}>this is from User</h1>
    
    </div>
  )
}

export default user;