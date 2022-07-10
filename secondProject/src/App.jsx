import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Module1 from './componetes/Module1'
import Module2 from './componetes/Module2'
import {Module3} from './componetes/Module2'
import Login from './componetes/Login'
import Config from './componetes/Config';
function App() {
  const [count, setCount] = useState(" ")
  let [input, setInput] = useState('')


const api=() =>{


  fetch('https://www.googleapis.com/books/v1/volumes?q'+input)
  .then(response => response.json())
  .then(data =>{

    console.log(data);

    setCount(data);

});  
}

const handlechanger=(event)=>{
  setInput(event.target.value)

}
  

  return (

    
    <div >
      
      <button  onClick={api}>FetchData</button>

      <input onChange={handlechanger}></input>
   <Module1/>
    <Module2/>
    <Module3/>
    <Login/>
    <Config/>
    </div>
  )
}

export default App
