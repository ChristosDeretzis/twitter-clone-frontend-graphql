import React from "react";
import Avatar from "../../../components/Avatar/Avatar";
import Button from "../../../components/Button/Button";
import CoverPhoto from "../../../components/CoverPhoto/CoverPhoto";
import CustomResponse from "../../../components/CustomResponse/CustomResponse";
import "./ProfileInfo.css";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import { CalendarViewMonth } from "@mui/icons-material";
import Follow from "../Follow/Follow";
import { NavLink } from "react-router-dom";

const ProfileInfo = ({ profile }) => {
    if(!profile) {
        return (
            <CustomResponse text="Oops, you are trying to visit a profile which seems to be doesn't exist. Make sure the profile exists" />
        );
    }

    const {
        id,
        coverPhoto,
        avatar,
        bio,
        location,
        website,
        isSelf,
        dob,
        followersCount,
        followingCount,
        userName,
        fullname
    } = profile;

    return (
        <div className="profile-info-wrapper">
            <CoverPhoto src={coverPhoto} alt="cover" />
            <Avatar src={avatar} alt="avatar" className="profile-Avatar"/>

            <div className="main-info">
                <div className="profile-name-username">
                    <span className="fullname">{fullname}</span>
                    <span className="username">{`@${userName}`}</span>
                </div>

                {isSelf ? (
                    <NavLink to="/settings/profile">
                        <Button className="action-btn" label="Edit Profile" />
                    </NavLink>
                ) : (
                    <Follow
                        isFollowing={true}
                        id={id} />
                )}
            </div>

            

            <div className="profile-info">
                <p className="bio">{bio}</p>

                {!location && !website && !dob ? null : (
                    <div className="loc-dob-web">
                        {location ? (
                            <span>
                                <LocationOnIcon /> {location}
                            </span>
                        ) : null}

                        {website ? (
                            <span>
                                <LinkIcon /> {website}
                            </span>
                        ) : null}
                        
                        {dob ? (
                            <span>
                                <CalendarViewMonth /> {dob}
                            </span>
                        ) : null}
                    </div>
                )}

                <div className="follow-following">
                    <span>
                        {followersCount ? `${followersCount} followers` : "No followers"}
                    </span>
                    <span>
                        {followingCount
                        ? `${followingCount} following`
                        : "Not following anyone"}
                    </span>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;