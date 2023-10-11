import React, { useEffect, useState } from 'react';

function Message() {
    const [message, setMessage] = useState([]);

    const getMessage = function() {
        fetch('http://127.0.0.1:3001/api/message')
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
        <h1>Message</h1>
        
        </>
        
    );


}

export default Message;