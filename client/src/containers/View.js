import React, { useState } from "react";
import EmployeeView from "../components/EmployeeView";
import ManagerView from "../components/ManagerView"

export default function View({currentUser, setCurrentUser}) {
    const [selectedMessage, setSelectedMessage] = useState({})
    return (
        <>
         {currentUser.role === "Manager" ? <ManagerView currentUser={currentUser} selectedMessage={selectedMessage} setSelectedMessage={setSelectedMessage}/> : <EmployeeView currentUser={currentUser} selectedMessage={selectedMessage} setSelectedMessage={setSelectedMessage} />}
        
        </>

    )

}

