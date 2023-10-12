import React, {useState} from "react";

function SendFeedback({currentUser, selectedMessage}) {
    
    const [form, setForm] = useState({
        _id : "",
        messageID: "",
        to: currentUser.managerID,
        from: currentUser.employeeID,
        message: "",
        response: "",
      });

    function updateForm(value) {
    return setForm((prev) => {
        return { ...prev, ...value };
    });
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const updatedMessage = {...form}
        await fetch("http://127.0.0.1:3001/api/message/", {
            method: "Put",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedMessage),
        })
        .catch(error => {
            console.log("Something went wrong")
        })

        setForm({
            messageID: "",
            to: currentUser.managerID,
            from: currentUser.employeeID,
            message: "",
            response: "",
        })
        
        
    }

    return (
        <>
        <form onSubmit={onSubmit}>
            <h3>Message:</h3>
            <p>{selectedMessage.message} </p>
            <label>Response:</label>
            <input label="Response" value={form.response} onChange={(e) => updateForm({response: e.target.value})} >
            </input>
            <div className="form-group">
                <input
                type="submit"
                value="Send Response"
                className="btn btn-primary"
                />
            </div>
            
        </form>
        
        </>
    )
}

export default SendFeedback;