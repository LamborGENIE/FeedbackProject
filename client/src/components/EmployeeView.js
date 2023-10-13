import React, { useEffect, useState } from 'react';
import SendFeedback from './SendFeedback.js';

import ViewMessages from './ViewMessages.js';

function EmployeeView({currentUser, setSelectedMessage, selectedMessage}) {
return (
    <>
        <SendFeedback currentUser={currentUser} selectedMessage={selectedMessage}/>
        <ViewMessages currentUser={currentUser} selectedMessage={selectedMessage} setSelectedMessage={setSelectedMessage}/>
    </>

)
}

export default EmployeeView;