
import { useState } from 'react';
import  LocationData from '../mockData/locationData.json';
import './Pages.css';

function LiveLocation(){
     
    const [message, setMessage] = useState('');

    function handleSendLocation() {
        setMessage('Location Sent Succesfully!😊')
    }
 

    return(

        <main className = 'live-location-container'>
           
           <h2> Location </h2>

         <section className ='location-list'>
           
           {
              LocationData.map((location, index) => (
               <artical className ='location-card'
                        key ={index} >
                    <h3> Location {index+1} </h3>
                    <p> Address : {location.address} </p>
                    <p> Latitude : {location.latitude} </p>
                    <p> Longitude: {location.longitude} </p>

                    <button onClick = {handleSendLocation}> send Location </button> 

                </artical>
              ))
           }
            
           </section>   

           { message && (<p className = 'success-message'> {message} </p>) }

        </main>

    );
}

export default LiveLocation;