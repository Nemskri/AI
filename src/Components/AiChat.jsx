import React from 'react'
import { useGlobalContext } from '../Context'

function AiChat() {
    const { aiChat } = useGlobalContext();
    return (
        aiChat.map((chat) => {
            const { message, index } = chat
            return <div className="chat-message" key={index}>
                <div className="user"> <img src="https://static.vecteezy.com/system/resources/previews/000/199/370/original/vector-robot-cheerful-isolated-on-blue-background-concept-illustration.jpg" alt="" className="avatar" />
                    <p className="message user-chat">{message}</p>
                </div>
            </div>
        })
    )
}

export default AiChat
