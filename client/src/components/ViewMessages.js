import React, { useEffect, useState } from 'react';

function ViewMessages({currentUser}) {

    const [messages, setMessages] = useState([]);

    const getMessages = function() {
        fetch(`http://127.0.0.1:3001/api/readAllEmployeeMessages/${currentUser.employeeID}`)
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
        <section id="messagesList">
        <div>
        <h1>Messages</h1>
        
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
        </div>
        </section>
        </>
        
    );


}

export default ViewMessages;