import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Data from "./Data"

function App() {
  let  [value, setValue] = useState(0) // hook -->
  let  [value1, setValue1] = useState("name")
  console.log(value);
  
  function incrementBy10(){
    value = value + 10;
    setValue(value);

  }

  function decrementBy10(){
    value = value - 10;
    setValue(value);

  }

  function upperCase(){
    let text = "Hello"
    let name = text.toUpperCase()
    setValue1(name);

  }



  return (
    <div className="App">
      <h1>{value}</h1>
      <h1>{name}</h1>
    
     <button onClick={incrementBy10} >Increment</button>

     <button onClick={decrementBy10}>Decrement</button>
     
     <button onClick={upperCase}>Uppercase</button>
      <Data/>
    </div>


      

  )
}

export default App
