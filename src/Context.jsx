import React, { useContext, useEffect, useState } from "react"
import { Configuration, OpenAIApi } from "openai";


export const AppContext = React.createContext()
export const AppProvider = ({ children }) => {

    // Chat AI //
    const [input, setInput] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const [aiChat, setAiChat] = useState([]);
    const [art, setArt] = useState(false);

    const aiArt = () => {
        setArt(true)
    }

    const newQuery = () => {
        setInput('');
        setAiChat([]);
        setChatLog([]);
        setArt(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setAiChat([])
        setChatLog([...chatLog, { user: "Kalpesh", message: `${input}` }])
        setInput('');
    }
    ///Experimental///
    const configuration = new Configuration({
        organization: "org-AMndm5kuAyM5roeGXA19K4yH",
        apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);

    const fetchAI2 = async () => {

        try {
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: chatLog.map((message) => message.message).join(""),
                max_tokens: 100,
                temperature: 0,
            })
            setAiChat([...aiChat, { message: response.data.choices[0].text }])

        } catch (e) {
            console.log(e);
        }
    }
    ///Experimental///


    useEffect(() => {
        fetchAI2();
    }, [chatLog])

    const handleChange = async (e) => {
        setInput(e.target.value)
    }

    return <AppContext.Provider value={{ handleChange, handleSubmit, input, chatLog, aiChat, newQuery, aiArt, art }} >
        {children}
    </AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext);
}



