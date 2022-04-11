import React from "react";
import { NavLink, Link } from "react-router-dom";
import Avatar from "../../../components/Avatar/Avatar";
import Button from "../../../components/Button/Button";
import Follow from "../Follow/Follow";
import "./User.css";

const User = ({ user }) => {
    return (
        <div className="user_wrapper">
            <div className="avatar_handle">
                <Link to={`/${user.userName}`}>
                    <Avatar src={user.avatar} alt="avatar" className="profile-Avatar-search"/>
                </Link>

                <div className="profile-name-username-search">
                    <span className="fullname">{user.fullname}</span>
                    <span className="username">{`@${user.userName}`}</span>
                </div>
            </div>
            

            {user.isSelf ? (
                <NavLink to="/settings/profile">
                    <Button className="action-btn" label="Edit Profile" />
                </NavLink>
            ) : (
                <Follow
                    isFollowing={user && user.isFollowing}
                    id={user.id} />
            )}
        </div>
    );
};

export default User;