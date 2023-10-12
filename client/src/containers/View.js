import React from "react";
import EmployeeView from "../components/EmployeeView";
import ManagerView from "../components/ManagerView"

export default function View({currentUser, setCurrentUser}) {

    return (
        <>
         {currentUser.role === "Manager" ? <ManagerView currentUser={currentUser} /> : <EmployeeView currentUser={currentUser} />}
        
        </>

    )

}

