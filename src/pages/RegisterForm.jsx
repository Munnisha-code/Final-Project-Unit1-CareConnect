
import React, { useState } from 'react';

function RegisterForm(){

    const [ data, setData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber:'',
        email:'',
        password:'',
        confirmPassword:'',

    });

    const {firstName, lastName, mobileNumber, email, password, confirmPassword} = data;



    return(
        <div>
            <h3> Register Form</h3>

            <form>
                <label> First Name: </label>
                <input type ='text' name = 'firstName' value = {firstName} /> <br />

                <label> Last Name: </label>
                <input type ='text' name = 'lastName' value = {lastName} /> <br />

                <label> Mobile Number: </label>
                <input type ='tel' id ='mobileNumber' name = 'mobileNumber' value = {mobileNumber} /> <br />

                <label> Email : </label>
                <input type ='text' name = 'email' value = {email} /> <br />

                <label> Password: </label>
                <input type ='text' name = 'password' value = {password} /> <br />

                <label> Confirm Password: </label>
                <input type ='text' name = 'confirmPassword' value = {confirmPassword} /> <br />

                <button type = 'submit'> Register </button>

            </form>
        </div>
    );
}

export default RegisterForm;