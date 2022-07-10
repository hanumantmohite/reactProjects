import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
// import { useSelector,useDispatch } from 'react-redux'
import Usereducer from './components/Usereducer';
import Login from './components/Login';
import {
  Routes,
  Route,
} from "react-router-dom";
// import Products from './components/Products';
// import Books from './components/Books';
import Signup from './components/Signup';

function App() {

  //useSelector
  //useDispatch Hook

  return (
    <div className="App">

<Routes>
      

      <Route path="/login" element={<Login />}/>

      <Route path="/reducer" element={<Usereducer />}/>
      <Route path="/signup" element={<Signup />}/>
       
       </Routes>

    
    
    </div>
  )
}

export default App