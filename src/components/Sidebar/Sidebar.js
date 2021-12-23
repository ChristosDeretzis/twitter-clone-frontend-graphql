import React, { useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagIcon from '@mui/icons-material/Tag';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import sidebarStyles from './SidebarStyles';



const Sidebar = () => {
    const styles = sidebarStyles();

    // get the pathname from url for styling purposes
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    return (
        <div className={styles.root}>
            <ul>
                <Link to="/">
                    <h3 className={styles.mainIcon}>
                        <TwitterIcon color='#1d9bf0'/>
                    </h3>
                </Link>
                <li className={splitLocation[1] === "" ? styles.selected : ""}>
                    <NavLink to="/" exact>
                        {
                            splitLocation[1] === "" ? 
                                <HomeIcon /> 
                            : 
                                <HomeOutlinedIcon />
                        } 
                        <span>Home</span>
                    </NavLink>
                </li>
                <li className = {splitLocation[1] === "explore" ? styles.selected : ""}>
                    <NavLink to="/explore">
                        {
                            splitLocation[1] === "explore" ? 
                                <TagIcon /> 
                            : 
                                <TagOutlinedIcon />
                        } 
                        <span>Explore</span>
                    </NavLink>
                </li>
                <li className = {splitLocation[1] === "notifications" ? styles.selected : ""}>
                    <NavLink to="/notifications">
                        {
                            splitLocation[1] === "notifications" ? 
                                <NotificationsIcon /> 
                            : 
                                <NotificationsNoneOutlinedIcon font/>
                        } 
                        <span>Notifications</span>
                    </NavLink>
                </li>
                <li className = {splitLocation[1] === "bookmarks" ? styles.selected : ""}>
                    <NavLink to="/bookmarks">
                        {
                            splitLocation[1] === "bookmarks" ? 
                                <BookmarkIcon /> 
                            : 
                                <BookmarkBorderOutlinedIcon />
                        } 
                        <span>Bookmarks</span>
                    </NavLink>
                </li>
                <li className = {splitLocation[1] === user.userName ? styles.selected : ""}>
                    <NavLink to={`/${user.userName}`}>
                        {   
                            splitLocation[1] === user.userName ? 
                                <PersonIcon /> 
                            : 
                                <PermIdentityIcon />
                        } 
                        <span>Profile</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;