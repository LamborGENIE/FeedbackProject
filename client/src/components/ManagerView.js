import React, { useEffect, useState } from 'react';
import SendResponse from './SendResponse.js';

import ViewMessages from './ViewMessages.js';

function EmployeeView({currentUser}) {
return (
    <>
        <SendResponse currentUser={currentUser}/>
        <ViewMessages currentUser={currentUser}/>
    </>

)
}

export default EmployeeView;