
import React, {useState} from 'react';
import './Pages.css';

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
       <div className ='message-container'>   
           <h4> Send a Quick Message </h4>

          <div className ='message-buttons'> 
            { messages.map((msg, index) => ( 
                  <button className ='quick-message-button' type='button' key={index} onClick= {() => setMessage(msg)}> 
                         {msg}
                  </button>
            ))}
            </div> 
            <textarea className ='message-textarea' placeholder='Type new message' value={message} onChange = {(ev) => setMessage(ev.target.value)}/>
           
           <button className = 'send-button' type='button' onClick={sendMessageHandler}> Send </button>
       </div>
    );
}


export default OneClickSendMessage;