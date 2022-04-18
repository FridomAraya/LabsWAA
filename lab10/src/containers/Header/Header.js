import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/posts"> Posts</Link></li>
                    <li><Link to="/Create-post"> New Post</Link></li>
                </ul>
            </nav>
        </header>
    );
}



export default Header;