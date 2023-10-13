import React, { useEffect, useState } from 'react';

function ViewMessages({currentUser, setSelectedMessage, selectedMessage}) {

    const [messages, setMessages] = useState([]);
    
    const getMessages = function() {
        fetch(`http://127.0.0.1:3001/api/message/retrieve`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(currentUser),
        })
        .then(response => response.json())
        .then(data => {
            setMessages(data)
        })
        .catch(err => {console.log(err)})
    }
    
    
    // useEffect(() => {getMessages()}, [] );
    return(
        <>
        <section id="messagesList">
        <div>
        <h1 onClick={()=>getMessages()} > Check Messages</h1>
        
            {messages.map (
            (message) => {
            return <div key={message._id} onClick={()=>setSelectedMessage(message)}>
                <div >
                Message: {message.message}
                </div>
                <>
                {message.response === undefined || message.response.length < 3 ? <div>Awaiting Response</div> : <div>
                Response: {message.response}
                </div>}
                
                </>
            </div>
            }
        )}
        </div>
        </section>
        </>
        
    );


}

export default ViewMessages;