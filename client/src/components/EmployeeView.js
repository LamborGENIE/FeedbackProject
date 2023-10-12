import React, { useEffect, useState } from 'react';
import SendFeedback from './SendFeedback.js';

import ViewMessages from './ViewMessages.js';

function EmployeeView({currentUser}) {
return (
    <>
        <SendFeedback currentUser={currentUser}/>
        <ViewMessages currentUser={currentUser}/>
    </>

)
}

export default EmployeeView;