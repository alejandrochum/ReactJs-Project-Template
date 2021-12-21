import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PeopleIcon from '@mui/icons-material/People';
import { Box, Typography, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from "react-router-dom";

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
    }
]

function Sidebar() {

    return (
        <div className="Sidebar">
            <Box>
                <Typography variant="h4" component="h1" sx={{ margin: "20px", color: "White" }}>
                    Crud App
                </Typography>
            </Box>

            <List>
                {SidebarData.map((val, key) => {
                    return (
                        <Box key={key}>
                            <ListItemButton
                                component={Link}
                                to={val.link}
                                // selected={selectedIndex === key}
                                // onClick={(event) => handleListItemClick(event, key)}
                                sx={{ '&:hover, &:focus': { bgcolor: '#155fa0' } }}
                            >
                                <ListItemIcon style={{ color: "#ffff" }}>
                                    {val.icon}
                                </ListItemIcon>
                                <ListItemText style={{ color: "#ffff" }} primary={val.title} />
                            </ListItemButton>

                        </Box>


                        // <Link underline="none" href={val.link} key={key}>
                        //     <Button startIcon={val.icon} style={{ width: "100%" }}>{val.title}</Button>
                        //     {/* <div id="icon">{val.icon}</div>
                        //         <div id="title">{val.title}</div> */}

                        // </Link>
                    )
                })}

            </List>
        </div>
    )
}

export default Sidebar;