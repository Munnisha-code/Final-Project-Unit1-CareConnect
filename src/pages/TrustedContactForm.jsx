
import './Pages.css';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import trustedContacts from '../mockData/trustedContacts';


function TrustedContactForm(){

    const navigate = useNavigate();

    const [contacts, setContacts] = useState(trustedContacts);

    const [formData, setFormData] = useState ({ name: '', mobileNumber:'', relationship:'' });
    
    const [ editId, setEditId] = useState(null);

 //input changes handler

    const changeHandler = (ev) =>{ setFormData({...formData, [ev.target.name]: ev.target.value});}

    // Add or update contacts 

   const submitHandler = ev => { ev.preventDefault();

      if(editId !== null){

        const updatedContacts = contacts.map((contact) => contact.id === editId ? { ...contact, ...formData} : contact);

                 setContacts(updatedContacts);

                 setEditId(null);
                 }

                else {
                
                     const newContact = { id: Date.now(), ...formData };

                     setContacts([ ...contacts, newContact]);
                    }

                    setFormData ({ name:'', mobileNumber:'', relationship:'' });
                
    }
      
  
        const editContact = (id) => {
                
            const selectedContact = contacts.find( contact => contact.id === id );

            setFormData ({
                name: selectedContact.name,
                mobileNumber: selectedContact.mobileNumber,
                relationship: selectedContact.relationship
            });

            setEditId(id);
        }

        const deleteContact= (id) => {

            const updatedContacts = contacts.filter( contact => contact.id !==id );

            setContacts(updatedContacts);
        }
       

    return(

        <div className="trusted-contact-container" >

            <h3 className='trusted-title' > Add Trusted Contacts </h3> <br />

            <form className='trusted-form' onSubmit ={submitHandler} >

                <div className="contact-card" >
               
   
                <label> Name </label>
                <input type='text' name='name' value = {formData.name} onChange = {changeHandler} /> <br />

                <label> Mobile Number </label>
                <input type ="tel"  name='mobileNumber' value ={formData.mobileNumber} onChange = {changeHandler}/> <br />

                <label> Relationship </label>
                <input type='text' name='relationship' value = {formData.relationship} onChange = {changeHandler} /> <br />

              
            </div>

                <button className='trusted-save-button' type='submit'>

                     { editId !== null? 'Update Contact': 'Add Contact'}

                 </button>

            </form>

            <div className ='contact-list' >
                     
                     {contacts.map((contact) => (
                                <div className='contact-card' key = {contact.id}>

                                    <h4> Trusted Contact </h4>
                                    <p> Name: {contact.name} </p>
                                    <p> Mobile: {contact.mobileNumber} </p>
                                    <p> Relationship: {contact.relationship} </p>

                                    <button onClick= { () => editContact(contact.id)} > Edit </button>

                                    <button onClick= { () => deleteContact(contact.id)} > Delete </button>

                                </div>
                    ))}
                <button className ='tc-save-button' type='button' onClick={ () => navigate('/thank-you')} > Save Contacts </button>
            </div>
            
        </div>
    );
}

export default TrustedContactForm;