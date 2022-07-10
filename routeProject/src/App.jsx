import { useState } from 'react'

import './App.css'
import SignUp from './Container/SignUp'
import Login from './Container/Login'
import Header from './Container/Header'
import Axios from './Container/Axios'
import {
  
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      
      <Routes>
      <Route path="/login" element={<Login />}>
     
     </Route>
      <Route path="/SignUp" element={<SignUp />}>
     
        </Route>
        <Route path="/axios" element={<Axios />}>
     
        </Route>
        
    </Routes>
    </div>
  )
}

export default App
