import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PeopleIcon from '@mui/icons-material/People';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import { Link } from 'react-router-dom';

const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "Campuses",
        icon: <ApartmentIcon />,
        link: "/campuses"
    },
    {
        title: "Students",
        icon: <PeopleIcon />,
        link: "/students"
    },
    {
        title: "Search Student",
        icon: <PersonSearchIcon />,
        link: "/studentsearch"
    }
]

function Sidebar() {
    return <div className="Sidebar">
        <div className="Sidebar-title">
            <h1>CRUD App</h1>
        </div>
        <ul>
            {SidebarData.map((val, key) => {
                return (
                    <Link to={val.link} className="link" key={key}>
                        <li>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    </Link>
                )
            })}
        </ul>

    </div>
}

export default Sidebar;