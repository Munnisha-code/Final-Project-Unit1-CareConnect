
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TrustedContactForm(){

    const navigate = useNavigate();

    const [data, setData] = useState({
        contact1:{name:'', mobileNumber:'', relationship:''} ,
        contact2:{name:'', mobileNumber:'', relationship:''} ,
        contact3:{name:'', mobileNumber:'', relationship:''} ,
        contact4:{name:'', mobileNumber:'', relationship:''} ,
        contact5:{name:'', mobileNumber:'', relationship:''} 

    });

    const{ name,mobileNumber,relationship } = data;

    const changeHandler = ev =>{
         setData({...data, [ev.target.name]: ev.target.value})
   }

   const submitHandler = ev => {
         ev.preventDefault();

         console.log(data);

       navigate ( '/thank-you');  
   }

    return(

        <div>
            <h3> Add Trusted Contacts </h3> <br />

            <form onSubmit ={submitHandler}>
               
               <h4> Contact 1</h4>

                <label> Name </label>
                <input type='text' name='name' value = { name} onChange={changeHandler}/> <br />

                <label> Mobile Number </label>
                <input type ="tel" id='mobileNumber' name='mobileNumber' value ={mobileNumber} onChange={changeHandler}/> <br />

                <label> Relationship </label>
                <input type='text' name='relationship' value = { relationship} onChange={changeHandler} /> <br />

                <button type='submit'> Save </button>

              <h4> Contact 2</h4>

                <label> Name </label>
                <input type='text' name='name' value = { name} onChange={changeHandler} /> <br />

                <label> Mobile Number </label>
                <input type ="tel" id='mobileNumber' name='mobileNumber' value ={mobileNumber} onChange={changeHandler}/> <br />

                <label> Relationship </label>
                <input type='text' name='relationship' value = { relationship} onChange={changeHandler} /> <br />

                <button type='submit'> Save </button>

              <h4> Contact 3 </h4>

                <label> Name </label>
                <input type='text' name='name' value = { name} onChange={changeHandler} /> <br />

                <label> Mobile Number </label>
                <input type ="tel" id='mobileNumber' name='mobileNumber' value ={mobileNumber} onChange={changeHandler}/> <br />

                <label> Relationship </label>
                <input type='text' name='relationship' value = { relationship}  onChange={changeHandler}/> <br />

                <button type='submit'> Save </button>

            <h4> Contact 4 </h4>

                <label> Name </label>
                <input type='text' name='name' value = { name}  onChange={changeHandler}/> <br />

                <label> Mobile Number </label>
                <input type ="tel" id='mobileNumber' name='mobileNumber' value ={mobileNumber} onChange={changeHandler}/> <br />

                <label> Relationship </label>
                <input type='text' name='relationship' value = { relationship} onChange={changeHandler} /> <br />

                <button type='submit'> Save </button>

            <h4> Contact 5 </h4>

                <label> Name </label>
                <input type='text' name='name' value = { name}  onChange={changeHandler}/> <br />

                <label> Mobile Number </label>
                <input type ="tel" id='mobileNumber' name='mobileNumber' value ={mobileNumber} onChange={changeHandler}/> <br />

                <label> Relationship </label>
                <input type='text' name='relationship' value = { relationship} onChange={changeHandler}/> <br />

                <button type='submit'> Save </button>

            </form>
            
        </div>
    );
}

export default TrustedContactForm;