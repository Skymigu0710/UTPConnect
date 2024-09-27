import React from 'react';
import "../styles/menu.css";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
const menu = ({ }) => (

    <div className="sidebar">

        <div className="menu">
            <div className="logo">
                <h1>UTPConnect</h1>
            </div>
                <li><a className="menu-item" href="#notifications"><HomeIcon /> <p>Home</p></a></li>
                <li><a className="menu-item" href="#profile"><PersonIcon /> <p>Profile</p></a></li>
                <li><a className="menu-item" href="#home"><NotificationsNoneIcon /><p>Notifications</p></a></li>
                <li><a className="menu-item" href="#groups"><PeopleAltIcon /> <p>Groups</p></a></li>
        </div>
    </div>
);
export default menu;


