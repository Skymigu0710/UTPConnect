import React from 'react';
import "../styles/menu.css";

const menu = ({ }) => (

    <div className="sidebar">
            <div className="logo">
                <h1>UTPConnect</h1>
            </div>
            <ul className="menu">
            <li><a className="menu-item" href="#home">Home</a></li>
            <li><a className="menu-item" href="#notifications">Notifications</a></li>
            <li><a className="menu-item" href="#profile">Profile</a></li>
            <li><a className="menu-item" href="#groups">Groups</a></li>
            </ul>
     </div>
);
export default menu;

		