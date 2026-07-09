
import React, { useState } from 'react';

function TrustedContactForm(){

    const [data, setData] = useState({
       contact1:{ name:'', mobileNumber:'', relationship:''},
       contact2:{ name:'', mobileNumber:'', relationship:''},
       contact3:{ name:'', mobileNumber:'', relationship:''},
       contact4:{ name:'', mobileNumber:'', relationship:''},
       contact5:{ name:'', mobileNumber:'', relationship:''}

    });


    const changeHandler = (contact, ev) =>{
         setData({...data, 
            [contact]:{ ...data[contact], 
            [ev.target.name]: ev.target.value}
        });
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
                <input type='text' name='name' value = {data.contact1.name} onChange={(ev) => changeHandler('contact1', ev)}/> <br />

                <label> Mobile Number </label>
                <input type ="tel" id='mobileNumber' name='mobileNumber' value ={data.contact1.mobileNumber} onChange={(ev) => changeHandler('contact1', ev)}/> <br />

                <lable> Relationship </lable>
                <input type='text' name='relationship' value = { relationship} onChange={changeHandler} /> <br />


              <h4> Contact 2</h4>

                <label> Name </label>
                <input type='text' name='name' value = { data.contact2.name} onChange={(ev) => changeHandler('contact2', ev)} /> <br />

                <label> Mobile Number </label>
                <input type ="tel" id='mobileNumber' name='mobileNumber' value ={data.contact2.mobileNumber} onChange={(ev) => changeHandler('contact2', ev)}/> <br />

                <label> Relationship </label>
                <input type='text' name='relationship' value = { data.contact2.relationship} onChange={(ev) => changeHandler('contact2', ev)} /> <br />


              <h4> Contact 3 </h4>

                <label> Name </label>
                <input type='text' name='name' value = { data.contact3.name} onChange={(ev) => changeHandler('contact3', ev)} /> <br />

                <label> Mobile Number </label>
                <input type ="tel" id='mobileNumber' name='mobileNumber' value ={data.contact3.mobileNumber} onChange={(ev) => changeHandler('contact3', ev)}/> <br />

                <label> Relationship </label>
                <input type='text' name='relationship' value = {data.contact3.relationship}  onChange={(ev) => changeHandler('contact3', ev)}/> <br />


            <h4> Contact 4 </h4>

                <label> Name </label>
                <input type='text' name='name' value = { data.contact4.name}  onChange={(ev) => changeHandler('contact4', ev)}/> <br />

                <label> Mobile Number </label>
                <input type ="tel" id='mobileNumber' name='mobileNumber' value ={data.contact4.mobileNumber} onChange={(ev) => changeHandler('contact4', ev)}/> <br />

                <label> Relationship </label>
                <input type='text' name='relationship' value = {data.contact4.relationship} onChange={(ev) => changeHandler('contact4', ev)} /> <br />


            <h4> Contact 5 </h4>

                <label> Name </label>
                <input type='text' name='name' value = { data.contact5.name}  onChange={(ev) => changeHandler('contact5', ev)}/> <br />

                <label> Mobile Number </label>
                <input type ="tel" id='mobileNumber' name='mobileNumber' value ={data.contact5.mobileNumber} onChange={(ev) => changeHandler('contact5', ev)}/> <br />

                <label> Relationship </label>
                <input type='text' name='relationship' value = {data.contact5.relationship} onChange={(ev) => changeHandler('contact5', ev)}/> <br />

                <button type='submit'> Save </button>

            </form>
        </div>
    );
}

export default TrustedContactForm;