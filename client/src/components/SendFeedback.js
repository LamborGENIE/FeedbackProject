import React, {useState} from "react";

function SendFeedback({currentUser}) {
    const user = {
        employeeID : 1,
        managerID : 4,

    }
    const [form, setForm] = useState({
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
        const newMessage = {...form}
        await fetch("http://127.0.0.1:3001/api/message/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newMessage),
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
        <form className="feedback-form" onSubmit={onSubmit}>
            <label>Feedback:</label>
            <textarea className="textInput" label="Feedback" value={form.message} onChange={(e) => updateForm({message: e.target.value})} >
            </textarea>
            <div className="form-group">
                <input
                type="submit"
                value="Send Feedback"
                className="btn btn-primary"
                />
            </div>
            
        </form>
        
        </>
    )
}

export default SendFeedback;