import React, { useEffect, useState } from 'react';
import SendResponse from './SendResponse.js';

import ViewMessages from './ViewMessages.js';

function ManagerView({currentUser, selectedMessage, setSelectedMessage}) {
    

    return (
        <>
            <SendResponse currentUser={currentUser} selectedMessage={selectedMessage} />
            <ViewMessages currentUser={currentUser} selectedMessage={selectedMessage} setSelectedMessage={setSelectedMessage}/>
        </>

    )
    }

export default ManagerView;