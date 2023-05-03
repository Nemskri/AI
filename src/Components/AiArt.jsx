import React from 'react'
import { useState } from 'react';
import './aiArt.css'
import { Configuration, OpenAIApi } from "openai";


function AiArt() {

    const config = new Configuration(
        {
            apiKey: "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"
        }
    )

    const openAi = new OpenAIApi(config)

    const [artPrompt, setArtPromt] = useState("");
    const [number, setNumber] = useState(1);
    const [artUrl, setArtUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [res, setRes] = useState("")

    const create = async (e) => {
        e.preventDefault();
        setLoading(true)
        const imgParams = {
            prompt: artPrompt,
            n: parseInt(number),
            size: res || "256x256",
        }
        const response = await openAi.createImage(imgParams);
        const url = response.data.data[0].url
        setArtUrl(url)
        setLoading(false)
    }


    return <div className="art">
        <div className="info">This AI fetches Image based on the text you Enter.</div>
        <div className="window">
            {artUrl && <img src={artUrl} className="artimg" />}
            {loading && <h1>AI is working on your Image</h1>}
        </div>
        {/* Input */}
        <div className="art-form">
            <form onSubmit={create}>
                <input type="text" className='art-input'
                    placeholder='Enter prompt to Generate Image'
                    onChange={(e) => {
                        setArtPromt(e.target.value);
                        setArtUrl("")
                    }}
                />
            </form>
            <select name="Resolution" id="res" className='res' onChange={(e) => setRes(e.target.value)}>
                <option value="256x256">256x256</option>
                <option value="512x512">512x512</option>
                <option value="1024x1024">1024x1024</option>
            </select>

            <form>
                <input type="text" className='art-input'
                    placeholder='Enter number of outputs'
                    onChange={(e) => { setNumber(e.target.value) }} />
            </form>
        </div>
        <button className='art-btn' onClick={create} >Create</button>
    </div>
}

export default AiArt
