
import React, { useState } from 'react';
<<<<<<< HEAD
import './Pages.css';
=======
>>>>>>> main
import { useNavigate } from 'react-router-dom';

function RegisterForm(){

<<<<<<< HEAD
=======
    // useNavigate is used to move the user to another page after form submission.

>>>>>>> main
    const navigate = useNavigate();

    const [ data, setData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber:'',
        email:'',
        password:'',
        confirmPassword:'',

    });

    const {firstName, lastName, mobileNumber, email, password, confirmPassword} = data;

    const changeHandler = ev => {
         setData({...data, [ev.target.name]: ev.target.value});
    }
    
    const submitHandler = ev => {
         ev.preventDefault();

         console.log(data)
          navigate('/trusted-contacts');
    }


    return(
        <div className='register-container'>
            <h3 className='register-title'> Register Form</h3>

            <form  className='register-form' onSubmit = {submitHandler}>

                <label> First Name: </label>
                <input type ='text' name = 'firstName' value = {firstName} onChange ={changeHandler} /> <br />

                <label> Last Name: </label>
                <input type ='text' name = 'lastName' value = {lastName}  onChange ={changeHandler} /> <br />

                <label> Mobile Number: </label>
                <input type ='tel' id ='mobileNumber' name = 'mobileNumber' value = {mobileNumber} onChange ={changeHandler} /> <br />

                <label> Email : </label>
                <input type ='email' name = 'email' value = {email} onChange ={changeHandler} /> <br />

                <label> Password: </label>
                <input type ='password' name = 'password' value = {password} onChange ={changeHandler} /> <br />

                <label> Confirm Password: </label>
                <input type ='confirmPassword' name = 'Password' value = {confirmPassword} onChange ={changeHandler} /> <br /> <br />

                <button className='register-button' type = 'submit'> Register </button> <br /> <br />

            </form>

        </div>
    );
}

export default RegisterForm;