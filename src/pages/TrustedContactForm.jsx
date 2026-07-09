
import React, { useState } from 'react';

function TrustedContactForm(){

    const [data, setData] = useState({
        name:'',
        mobileNumber:'',
        relationship:''

    });

    const{ name,mobileNumber,relationship } = data;

    const changeHandler = ev =>{
         setData({...data, [ev.target.name]: ev.target.value})
   }

   const submitHandler = ev => {
         ev.preventDefault();

         console.log(data)
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

                <lable> Relationship </lable>
                <input type='text' name='relationship' value = { relationship} onChange={changeHandler} /> <br />

                <button type='submit'> Save </button>

              <h4> Contact 2</h4>

                <label> Name </label>
                <input type='text' name='name' value = { name} /> <br />

                <label> Mobile Number </label>
                <input type ="tel" id='mobileNumber' name='mobileNumber' value ={mobileNumber}/> <br />

                <lable> Relationship </lable>
                <input type='text' name='relationship' value = { relationship} /> <br />

                <button type='submit'> Save </button>

              <h4> Contact 3 </h4>

                <label> Name </label>
                <input type='text' name='name' value = { name} /> <br />

                <label> Mobile Number </label>
                <input type ="tel" id='mobileNumber' name='mobileNumber' value ={mobileNumber}/> <br />

                <lable> Relationship </lable>
                <input type='text' name='relationship' value = { relationship} /> <br />

                <button type='submit'> Save </button>

            <h4> Contact 4 </h4>

                <label> Name </label>
                <input type='text' name='name' value = { name} /> <br />

                <label> Mobile Number </label>
                <input type ="tel" id='mobileNumber' name='mobileNumber' value ={mobileNumber}/> <br />

                <lable> Relationship </lable>
                <input type='text' name='relationship' value = { relationship} /> <br />

                <button type='submit'> Save </button>

            <h4> Contact 5 </h4>

                <label> Name </label>
                <input type='text' name='name' value = { name} /> <br />

                <label> Mobile Number </label>
                <input type ="tel" id='mobileNumber' name='mobileNumber' value ={mobileNumber}/> <br />

                <lable> Relationship </lable>
                <input type='text' name='relationship' value = { relationship} /> <br />

                <button type='submit'> Save </button>

            </form>
        </div>
    );
}

export default TrustedContactForm;