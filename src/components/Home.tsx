import { User } from "../App"
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Navigate, Route, } from "react-router-dom";
import logo from './logo.svg'
import { Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



function Home({signout}){
    const [transactions,setTransactions]=useState<any[]>([])



    useEffect(()=>{
        fetch('http://localhost:4000/transactions')
        .then((response) => response.json())
        .then((data) => setTransactions(data));
    },[]);
    
   
    return(
        <>
        <h1>Welcome</h1>
        {transactions.map((transaction)=> <div>   
        <h3>Payment</h3>
        <p>{transaction.transaction_name}</p>
        <h3>Ammount</h3>
        <p>{transaction.transaction_ammount}$</p>
        </div>
            
            
            
            )}
       
        <button className="btn"onClick={signout}>Sign Out</button>
        </>
    )
}

export default Home