
import React, {useState} from 'react';

function OneClickSendMessage(){
    const [ message, setMessage] = useState('');

    const messages = [

        "I am at Home.", 
        " I am travelling right now. I will update you when I reach my destination. ",
        " Everything is okay. I am safe. ",
        " I need help. Please contact me as soon as possible.",
        " I am at the office",
        " Emergency ",
        " I am at the park."

    ];
      
    const sendMessageHandler = () => { };

    return( 
       <div>   
           <h4> Send a Quick Message </h4>
            
            { messages.map((msg, index) => ( 
                  <button type='button' key={index} onClick= {() => setMessage(msg)}> 
                         {msg}
                  </button>
            ))}

            <textarea placeholder='Type new message' value={message} onChange = {(ev) => setMessage(ev.target.value)}/>
           
           <button type='button' onclick={sendMessageHandeler}> Send </button>
       </div>
    );
}


export default OneClickSendMessage;