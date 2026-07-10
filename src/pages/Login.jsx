
import React, { useState } from 'react';
import {  Link, useNavigate } from "react-router-dom";


function Login(){

   const [data, setData]=useState({
        
        username : "",
        password : ""

   });
    
   // After user Login page navigate to oneclicksendmessage

   const navigate = useNavigate();

   //Destructuring the data

   const {username,password} = data;

   // onchange eventhandler for enter/change the login credentials

   const changeHandler = ev =>{
         setData({...data, [ev.target.name]: ev.target.value})
   }
   
   // submit handler

   const submitHandler = ev => {
         ev.preventDefault();

         console.log(data) 

      if ( data.username && data.password){
        navigate('/one-click-send-message');
      }   

    }

    const loginHandler = () => {
        
        navigate('/one-click-send-message');
    }     
   
    return(
        <div className="Login-container">
            <center>
                <form onSubmit ={submitHandler} className="login-form" >
                    
                    <h3> Login to CC</h3>

                    <label> UserName: </label>
                    <input type="text" name="username" value={ username} onChange={changeHandler}/> <br />

                    <label> Password: </label>
                    <input type="password" name="password" value={password} onChange={changeHandler} /><br />

                    <button type="submit" className ="login-button"> Login </button>
                </form> 
                <br />

                <p> If you are not a member? {''}
                    <Link to='/RegisterForm '> Please register Here </Link>
                </p> <br />
            </center>
        </div>

    );
}

export default Login;