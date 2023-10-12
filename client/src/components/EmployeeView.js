import React, { useEffect, useState } from 'react';
import SendFeedback from './SendFeedback.js';
import ViewMessage from './Message.js';

function EmployeeView() {
return (
    <>
        <SendFeedback />
        <ViewMessage />
    </>

)
}

export default EmployeeView;