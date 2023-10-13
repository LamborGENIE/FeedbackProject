import React, { useEffect, useState } from 'react';
import SendFeedback from './SendFeedback.js';

import ViewMessages from './ViewMessages.js';

function EmployeeView({currentUser, setSelectedMessage, selectedMessage}) {
return (
    <>
        <section className='viewContainer'>
        <ViewMessages currentUser={currentUser} selectedMessage={selectedMessage} setSelectedMessage={setSelectedMessage}/>
            <SendFeedback currentUser={currentUser} selectedMessage={selectedMessage}/>
            
        </section>
    </>

)
}

export default EmployeeView;