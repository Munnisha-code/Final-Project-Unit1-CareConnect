
import React, {useState} from 'react';
import './Pages.css';

function OneClickSendMessage(){
    const [ message, setMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const messages = [

        " 🏠 I am at Home.", 
        " 🚗 I am travelling right now. I will update you when I reach my destination. ",
        " ✅ Everything is okay. I am safe. ",
        " 🆘 I need help. Please contact me as soon as possible.",
        " 🏢 I am at the office",
        " 🚨 Emergency ",
        " 🌳 I am at the park."

    ];
      
    const sendMessageHandler = () => { 
        if (message.trim() === ''){
            setErrorMessage('Please select or type a message first.');
        }
        else {
            setErrorMessage('');
            setMessageSent(true);
        }

    };

    const sendAnotherMessageHandler = () =>{ 
        setMessageSent(false);
        setMessage('');
        setErrorMessage('');
    };

    return( 

     <main>  
        
        <div className ='message-container'>   

            { 
                messageSent ? (
                    <div className = 'success-section'> 
                         <h4> Send a Quick Message </h4>
                         <p> Your message:</p>
                         <p> {message} </p>
                         <p> Your trusted contacts have been notified.</p>

                         <button 
                                className='send-button'
                                type='button'
                                onClick={sendAnotherMessageHandler}
                            >
                                Send Another Message
                            </button>
                    </div> 
           ) : (

                    <div className='message-form-section'>

                           <h4>Send a Quick Message</h4>
      
                        <div className ='message-buttons'> 

                            { messages.map((msg, index) => ( 
                                 <button className ='quick-message-button' 
                                         type='button' 
                                         key={index} 
                                         onClick= {() => setMessage(msg)}> 
                                    {msg}
                                 </button>
                            ))}
                        </div> 
                
                            <textarea className ='message-textarea' 
                                      placeholder='Type new message' 
                                      value={message} 
                                      onChange = {(ev) => setMessage(ev.target.value)}/>
                    
                           {
                               errorMessage && ( <p className='error-message'> {errorMessage} </p> )
                           }

           
                            <button className = 'send-button' type='button' onClick={sendMessageHandler}> Send </button>

                   </div>
                )
            }  
        </div>
     </main>

    );
}
  

export default OneClickSendMessage;