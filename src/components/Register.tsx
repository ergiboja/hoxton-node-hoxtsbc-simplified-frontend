import React from 'react';
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import {User} from '../App'
import { useNavigate } from 'react-router-dom';


type Props ={
    signin: (user:User)=> void
}





function Register({signin}){
    const [errormsg, setErrormsg]=useState(null)
const[error, setError]=useState(false)
const navigate = useNavigate();

if(error==false){
  navigate("/home")
}else{
    //do nothing
}






    return(
        <section className='registersec'>
        <div className="container">
            <form id='form' className='registerForm'
             onSubmit={e=>{
                e.preventDefault()
                fetch('http://localhost:4000/sign-up',{
                    method: 'POST',
                    headers:{
                        'Content-type':'application/json'
                    },
                    body: JSON.stringify({
                        email: e.target.email.value,
                        password: e.target.password.value
                    })
                    
                }).then(resp =>{
                    if(!resp.ok){
                        setErrormsg("Wrong Credentials"),
                        setError(true)
                    }else {
                        setErrormsg("Logged IN"),
                        setError(false)
                      }
                    
                    
                  return  resp.json()})
                .then(user =>signin(user))
            }
         } >
                
                <h1>Register</h1>
               
                <div className="input-field">
                    <i className="uil uil-envelope icon"></i><input type="email" name='email' id="email"  
                      required placeholder="Enter Your Email:"/>
                </div>
                <div className="input-field">
                    <i className="uil uil-lock icon"></i><input type="password" id="password" name='password' minLength={4}
                     required placeholder="Enter Your Password:" />
                     <p className='error'></p>
                </div>
                
                <button type="submit" value="Submit" >Register</button>
                <p>{errormsg}</p>
                <h2>Are you already a member ? <Link to="/">Sign In</Link> </h2>




            </form>













        </div>
        </section>
        
    )
}

export default Register