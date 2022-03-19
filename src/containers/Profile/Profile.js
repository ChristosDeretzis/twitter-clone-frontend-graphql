import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';
import { PROFILE } from '../../queries/Profile';
import Tweet from '../Tweet/Tweet/Tweet';
import "./Profile.css"
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {

    const { handle } = useParams();

    const { data, loading } = useQuery(PROFILE, {
        variables: {
            userName: handle
        }
    });

    console.log(data);

    return (
        <div className="profile-wrapper">
            <div className="profile-header">
                <div className="profile-top">
                    <span>{data && data.profile && data.profile.fullname}</span>
                    <span className="tweets-count">
                        {data && data.profile && data.profile.tweetsCount
                            ? `${data.profile.tweetsCount} Tweets`
                            : "No Tweets"}
                    </span>
                </div>
            </div>
            <ProfileInfo profile={data && data.profile} />
            {data && data.profile && data.profile.tweets && data.profile.tweets.length ? 
                data.profile.tweets.map((tweet) => (
                    <Tweet tweet={tweet} />
                )) : null}
        </div>
    );
};

export default Profile;