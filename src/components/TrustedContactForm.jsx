
import React, { useState } from 'react';

function TrustedContactForm(){

    const [data, setData] = useState({
        name:'',
        mobileNumber:'',
        relationship:''

    });

    const{ name,mobileNumber,relationship } = data;

    return(

        <div>
            <h3> contacts: </h3> <br />
            <form>
              <h4> Contact 1</h4>

                <label> Name </label>
                <input type='text' name='name' value = { name} /> <br />

                <label> Mobile Number </label>
                <input type ="tel" id='mobileNumber' name='mobileNumber' value ={mobileNumber}/> <br />

                <lable> Relationship </lable>
                <input type='text' name='relationship' value = { relationship} /> <br />

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