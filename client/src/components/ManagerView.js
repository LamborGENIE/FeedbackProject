import React, { useEffect, useState } from 'react';
import SendResponse from './SendResponse.js';

import ViewMessages from './ViewMessages.js';

function ManagerView({currentUser, selectedMessage, setSelectedMessage}) {
    

    return (
        <>
            <section className='viewContainer'> 
                <ViewMessages currentUser={currentUser} selectedMessage={selectedMessage} setSelectedMessage={setSelectedMessage}/>
                <SendResponse currentUser={currentUser} selectedMessage={selectedMessage} />
            </section>
        </>

    )
    }

export default ManagerView;