
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ThankYou(){

    const navigate = useNavigate();

    return(
       
        <div> 
           <h3> Thank You for Registering! </h3>

           <p> Your Account has been created. </p>

         <button onClick = {() => Navigate('/login')}> Go to Login </button>  

         </div>
    );
}

export default ThankYou;