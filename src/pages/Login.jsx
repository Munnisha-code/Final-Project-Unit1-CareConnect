
import React, { useState, Link } from 'react-router-dom';


function Login(){

   const [data, setData]=useState({
        
        username : "",
        password : ""

   });

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
   }
    return(
        <div className="Login-container">
            <center>
                <form onSubmit ={submitHandler} className="login-form" >
                    
                    <h3> Login to CC</h3>

                    <label> UserName: </label>
                    <input type="text" name="username" value={ username} onChange={changeHandler}/> <br />

                    <lable> Password: </lable>
                    <input type="password" name="password" value={password} onChange={changeHandler} /><br />

                    <button type="submit" className ="login-button"> Login </button>
                </form>

                <p> If you are not a member? {''}
                    <Link to='/RegisterForm '> Please register Here </Link>
                </p>
            </center>
        </div>

    );
}

export default Login;