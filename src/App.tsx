import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Navigate, Route, } from "react-router-dom";
import logo from './logo.svg'
import './App.css'
import { Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

export type User = {
  id: number
  email: string
  password: string
}

function App() {
  const [user, setUser] = useState<null | User>(null)
  const[logginfo, setLogginfo]=useState(false)
  function signin(user: User) {
    setUser(user)
    setLogginfo(true)
   
  }
  function signout() {
    setUser(null)
    setLogginfo(false)
  }
  console.log(user)
  console.log(logginfo)
 
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //   if(logginfo==true){
  //     navigate("/home")
  //   }else{
  //     navigate("/")
        
  //   }
  // },[])

  


 



  return (
    <>
      <Routes>

        <Route path='/home' element={<Home   signout={signout}/>} />
       
        <Route path='/' element={<Login signin={signin} />} />
        <Route path='/register' element={<Register signin={signin} />} />
      


      </Routes>
    </>
  )
}

export default App
