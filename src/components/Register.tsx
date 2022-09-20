import React from 'react';
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

function Register(){
    return(
        <section className='registersec'>
        <div className="container">
            <form id='form' className='registerForm' >
                
                <h1>Register</h1>
               
                <div className="input-field">
                    <i className="uil uil-envelope icon"></i><input type="email" id="email"  
                      required placeholder="Enter Your Email:"/>
                </div>
                <div className="input-field">
                    <i className="uil uil-lock icon"></i><input type="password" id="password" minLength={4}
                     required placeholder="Enter Your Password:" />
                </div>
                <div className="input-field">
                    <i className="uil uil-lock icon"></i><input type="password" id="password2" minLength={4}
                   required placeholder="Confirm Your Password:" />
                    <p className='error'></p>
                </div>
                <button type="submit" value="Submit" >Register</button>
                <p></p>
                <h2>Are you already a member ? <Link to="/">Sign In</Link> </h2>




            </form>













        </div>
        </section>
        
    )
}

export default Register