import React, { useEffect, useState } from 'react';
import SendResponse from './SendResponse.js';

import ViewMessages from './ViewMessages.js';

function EmployeeView({currentUser}) {
    const [selectedMessage, setSelectedMessage] = useState({message : ""})

    return (
        <>
            <SendResponse currentUser={currentUser} selectedMessage={selectedMessage} />
            <ViewMessages currentUser={currentUser} selectedMessage={selectedMessage} setSelectedMessage={setSelectedMessage}/>
        </>

    )
    }

export default EmployeeView;