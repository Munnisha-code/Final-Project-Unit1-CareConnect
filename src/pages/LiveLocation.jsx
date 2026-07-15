
import { useState } from 'react';
import  LocationData from '../mockData/locationData.json';

function LiveLocation(){
     
    const [message, seMessage] = useState('');

    function handleSendLocation() {
        setMessage('Location Sent Succesfully!😊')
    }
 

    return(

        <main classname = 'live-location-container'>
           
           <h2> Location </h2>

         <section className ='location-list'>
           
           {
              LocationData.map((location, index) => (
               <artical classname ='location-card'
                        key ={index} >
                    <h3> Location {index+1} </h3>
                    <p> Address : {location.address} </p>
                    <p> Latitude : {location.latitude} </p>
                    <p> Longitude: {location.logitude} </p>

                    <button onClick = {handleSendLocation}> send Location </button> 

                </artical>
              ))
           }
            
           </section>   

           { message && (<p className = 'success-message'> {location} </p>) }

        </main>

    );
}

export default LiveLocation;