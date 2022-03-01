import React, { useState } from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import { useMutation } from '@apollo/client';
import { RETWEET_TWEET } from '../../../../queries/Tweet';

const Retweet = ({ id, isRetweet, retweetsCount }) => {
    const [retweet, setRetweet] = useState(isRetweet);
    const [retweetsCountState, setRetweetsCountState] = useState(retweetsCount);
    const [toggleRetweetMutation, { loading }] = useMutation(RETWEET_TWEET);

    const handleRetweet = async () => {
        setRetweet(!retweet);
        if(retweet) {
            setRetweetsCountState(retweetsCountState - 1);
        } else {
            setRetweetsCountState(retweetsCountState + 1);
        }
        await toggleRetweetMutation({
            variables: {
                toggleRetweetId: id
            }
        });
    }
    
    return (
        <span>
            {retweet ? (
                <RepeatIcon style={{color: '#22c38d'}} onClick={handleRetweet} />
            ) : (
                <RepeatIcon onClick={handleRetweet} />
            )}
            {retweetsCountState ? retweetsCountState : null}
        </span>
    )
};

export default Retweet;
