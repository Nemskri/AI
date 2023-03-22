import React from 'react'
import { FaGithubAlt } from "react-icons/fa";
import { useGlobalContext } from '../Context';
import './side-menu.css'

function SideMenu() {
    const { newQuery, aiArt } = useGlobalContext();
    return (
        <aside className="side-menu">
            <div className="btn" onClick={newQuery}>
                <FaGithubAlt className='site-logo' />
                <h1>NewQuery</h1>
            </div>
            <div className="btn" onClick={aiArt}>
                <FaGithubAlt className='site-logo' />
                <h1>AI ART</h1>
            </div>
        </aside>
    )
}

export default SideMenu
