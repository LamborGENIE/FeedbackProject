import React, { useEffect, useState } from 'react';

function ViewMessages() {

    const [messages, setMessages] = useState([]);

    const getMessages = function() {
        fetch(`http://127.0.0.1:3001/api/readAllEmployeeMessages/3`)
        .then(response => response.json())
        .then(data => {
            setMessages(data)
            console.log(data)
        })
        .catch(err => {console.log(err)})
    }

    
    useEffect(() => {getMessages()}, []);
    return(
        <>
        <h1>Messages</h1>
        <div >
        <ul>
            {messages.map (
            (message) => {
            return <div key={message.messageID}>
                <div>
                Message: {message.message}
                </div>
                <div>
                Response: {message.response}
                </div>
                
            </div>
            }
        )}
        </ul>

        </div>
        
        </>
        
    );


}

export default ViewMessages;