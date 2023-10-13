import React from "react";

function Header({isLoggedIn, setIsLoggedIn}) {
    const handleClick = function() {
        setIsLoggedIn(false);

    }

    return (
        <>  
        <div>
            <h1>Backfeed</h1>
            {isLoggedIn===true ? <div >Logout</div> : null }
        </div>
        </>

    )
}

export default Header;