import './chatbox.css'
import { MdSend } from "react-icons/md";
import { useGlobalContext } from '../Context';
import AiChat from './AiChat';

function Chatbox() {

    const { chatLog, handleChange, handleSubmit, input, aiChat } = useGlobalContext();



    return (
        <section className="chatbox">
            <div className="chat-log">
                <div className="userChat"> {chatLog.map((chat) => {

                    const { message, index } = chat
                    return <div className="chat-message" key={index}>
                        <div className="user"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8ZmT3b9ioU8FlbI_wxnJ8t3oHcFKfi_Ne_zxcTUvfxYDJW9Ub5aN88_vi2dQ5g-WtK8&usqp=CAU" alt="" className="avatar" />
                        <p className="message user-chat">{message}</p>
                        </div>
                    </div>
                })}
                </div>
                <div className="aiChat"> {aiChat.length > 0 && <AiChat />}</div>
            </div>

            <div className="chat-bar">
                <form onSubmit={handleSubmit}>
                    <input type="text" className='chat-input'
                        placeholder='Type your query here'
                        value={input}
                        onChange={handleChange} />
                </form>
                <MdSend className='send-icon' />
            </div>
        </section>
    )
}

export default Chatbox
