import React, { useEffect, useState }from 'react';
import "../styles/menu.css";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Link from 'next/link';
function Menu ()  {
    const [userId, setUserId] = useState('');

    useEffect(() => {
        // Obtener el ID del usuario del localStorage
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);
    return (<div className="sidebar">

        <div className="menu">
            <div className="logo">
                <h1>UTPConnect</h1>
            </div>
                <li><Link className="menu-item" href={"/Mainfeed"}><HomeIcon /><p>Home</p></Link> </li>
                <li><Link className="menu-item" href={`/Profile/${userId}`}><PersonIcon /> <p>Profile</p></Link></li>
                <li><Link className="menu-item" href="#home"><NotificationsNoneIcon /><p>Notifications</p></Link></li>
                <li><Link className="menu-item" href={"/GroupList"}><PeopleAltIcon /> <p>Groups</p></Link></li>
                <li><Link className="menu-item" href={"/mainGroup"}><PeopleAltIcon /> <p>Create Group</p></Link></li>

        </div>
    </div>
);
};
export default Menu;


