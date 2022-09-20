import { useState } from 'react'
import { BrowserRouter as Router, Route,} from "react-router-dom";
import logo from './logo.svg'
import './App.css'
import { Routes } from 'react-router-dom'

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/' element={Login()}/>
      
      <Route path='/register' element={Register()}/>
     
      <Route path='/home' element={Home()}/>
      </Routes>
    </>
  )
}

export default App
