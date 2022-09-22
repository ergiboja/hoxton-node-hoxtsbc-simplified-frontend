import React from 'react';
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import {User} from '../App'
import { useNavigate } from 'react-router-dom';


type Props ={
    signin: (user:User)=> void
}



function Login({signin}){
   
    const [errormsg, setErrormsg]=useState(null)
    const[error, setError]=useState(false)
    const navigate = useNavigate();
  
    if(error==false){
      navigate("/home")
    }else{
        //do nothing
    }
  
   


   
    

    return(
        <section className="sectioni">
        <div className="container">
            <form onSubmit={e=>{
                
                e.preventDefault()
                fetch('http://localhost:4000/sign-in',{
                    method: 'POST',
                    headers:{
                        'Content-type':'application/json'
                    },
                    body: JSON.stringify({
                        email: e.target.email.value,
                        password: e.target.password.value
                    })
                    
                }).then(resp => {
                    if(!resp.ok){
                        setErrormsg("Wrong Credentials"),
                        setError(true)
                    }else {
                        setErrormsg("Logged IN"),
                        setError(false)
                      }
                    
                    
                   return resp.json()})
                .then(user =>signin(user))
                // .catch(error => {
                //     // do things with the error, like logging them:
                //     setErrormsg(error.message)
                   
                //   })
            }
         } >
            


           
                <h1>Login</h1>
                <div className="input-field">
                    <i className="uil uil-envelope icon"></i><input type="email"  name='email' required placeholder="Enter Your Email:" />
                </div>
                <div className="input-field">
                    <i className="uil uil-lock icon"></i><input type="password" name='password'   required placeholder="Enter Your Password:" />
                </div>
                <button type="submit" value="Submit">Login</button>
                <p className="error">{errormsg}</p>
            
               
                <h2>Don't have an account ? <Link to="/register">SignUp Now</Link> </h2>




            </form>













        </div>
        </section>
    )
}

export default Login