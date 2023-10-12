import React, { useEffect, useState } from 'react';
import SendFeedback from './SendFeedback.js';

import ViewMessages from './ViewMessages.js';

function EmployeeView() {
return (
    <>
        <SendFeedback />
        <ViewMessages />
    </>

)
}

export default EmployeeView;