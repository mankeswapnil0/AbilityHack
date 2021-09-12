import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './Chat.css'

function Chat() {
    const [chats, setChat] = useState([])
    const [newChat, setNewChat] = useState('')

    const handleSubmit = () => {
        setChat([...chats, newChat])
    }

    return (
        <div className="chat">
            <div className="chat_title">
                <h1>Talk With Counsellor</h1>
                <p>Don't hesitate, just talk Anonymously ...</p>
            </div>
            <div className="chat_section">{chats.map(chat => (
                <p><strong>Anonymous: </strong>{chat}</p>
            ))}
                <input type="text" placeholder="Type a query?" onChange={(e) => setNewChat(e.target.value)} />
                <Button style={{marginLeft: "auto",marginRight: "auto",width: "80px",backgroundColor: "rgb(41, 194, 41)",color:"white",fontWeight:"600",fontSize: "15px", padding:"5px"}} onClick={handleSubmit}>Submit</Button></div>

        </div>
    )
}

export default Chat
