import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Add1} from "./slices"
import {Add2} from "./slices"
import {useDispatch, useSelector} from "react-redux"
function App() {
  
const dispatch = useDispatch()
const data = useDispatch()



const handlClick=()=>{
  
  dispatch(Add1())
  
}



  return (
    <div className="App">
     <input onChange={Add1}></input>

     <input onChange={Add2}></input>

     <button onClick={handlClick}>Add</button>
    </div>
  )
}

export default App
