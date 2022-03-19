import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import { FOLLOW, UNFOLLOW } from "../../../queries/Follow";
import { FEED, USERS } from "../../../queries/Others";
import { PROFILE } from "../../../queries/Profile";

const Follow = ({ isFollowing, id}) => {
    const [followState, setFollowState] = useState(isFollowing);

    const [followMutation] = useMutation(FOLLOW, {
        variables: { followId: id },
        refetchQueries: [{ query: FEED }, { query: USERS }, { query: PROFILE }]
    });

    const [unfollowMutation] = useMutation(UNFOLLOW, {
        variables: { unfollowId: id },
        refetchQueries: [{ query: FEED }, { query: USERS }, { query: PROFILE }]
    });

    const handleFollow = async () => {
        if(followState){ 
            setFollowState(false);
            try {
                await unfollowMutation();
            } catch (e) {
                console.log(e.message);
            }
        } else {
            setFollowState(true);
            try {
                await followMutation();
            } catch (e) {
                console.log(e.message);
            }
        }
    };

    return (
        <Button onClick={handleFollow} label={followState ? "Following" : "Follow"} />
    );
};

export default Follow;