import React, { useState } from "react";

import "./Login.css";

export default function Login({currentUser, setCurrentUser}) {

    
    const [userToVerify, setUserToVerify] = useState({
        
        username: "",
        password: "",
        
      });

    function updateUserToVerify(value) {
        return setUserToVerify((prev) => {
        return { ...prev, ...value };
        });
    }   
    const onSubmit = async (e) => {
        e.preventDefault();

        await fetch("http://127.0.0.1:3001/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userToVerify),
            })
            .then(response => response.json())
            .then(data => {
                setCurrentUser(data)
                console.log(currentUser)
            })
            .catch(error => {
                console.log("Something went wrong")
            })
            
            
    

  }

  return (

    <div className="Login">
      <form onSubmit={onSubmit}>
        <div>
            <label>Username: </label>
            <input type="text" value={userToVerify.username} onChange={(e) =>updateUserToVerify({username: e.target.value})}></input>
        </div>
        <div>
            <label>Password: </label>
            <input type="password" value={userToVerify.password} onChange={(e) =>updateUserToVerify({password: e.target.value})}></input>
        </div>
        <div>
            <input type="submit" />
        </div>

      </form>

    </div>

  );

}

