import React, { useEffect, useState } from 'react';

function ViewMessage() {

    const [message, setMessage] = useState([]);

    const getMessage = function() {
        fetch(`http://127.0.0.1:3001/api/message/2`)
        .then(response => response.json())
        .then(data => {
            setMessage(data)
            console.log(data)
        })
        .catch(err => {console.log(err)})
    }

    
    useEffect(() => {getMessage()}, []);
    return(
        <>
        <h3>Message</h3>
        <div >
        {message.message}
        </div>
        <h3>Response</h3>
        <div >
        {message.response}
        </div>
        
        </>
        
    );


}

export default ViewMessage;