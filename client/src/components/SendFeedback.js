import React from 'react';
// , { useEffect, useState }
function ViewMessages() {
const messages = [
    {messageID: 2,
    from: 2,
    to: 1,
    message: "I'm quitting",
    response: "Please Don't",
    sentiment: "Negative"
 }, {messageID: 3,
    from: 3,
    to: 4,
    message: "I'm quitting",
    response: "Okay",
    sentiment: "Negative" } ]

    // const [messages, setMessages] = useState([]);

    // const getMessages = function() {
    //     fetch(`http://127.0.0.1:3001/api/messages/2`)
    //     .then(response => response.json())
    //     .then(data => {
    //         setMessages(data)
    //         console.log(data)
    //     })
    //     .catch(err => {console.log(err)})
    // }

    
    // useEffect(() => {getMessages()}, []);
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