import React, { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useMutation } from '@apollo/client';
import { LIKE_TWEET } from '../../../../queries/Tweet';

const LikeTweet = ({id, isLiked, likesCount}) => {
    const [liked, setLiked] = useState(isLiked);
    const [likesCountState, setLikesCountState] = useState(likesCount);
    const [toggleLikeMutation] = useMutation(LIKE_TWEET);
    
    const handleToggleLike = () => {
        setLiked(!liked);
        if(liked) {
            setLikesCountState(likesCountState - 1);
        } else {
            setLikesCountState(likesCountState + 1);
        }
        toggleLikeMutation({
            variables: {
                toggleLikeId: id
            }
        });
    };

    return (
        <span>
            {liked ? (
                <FavoriteIcon sx={{ color: '#f91880'}} onClick={handleToggleLike}/>
            ) : (
                <FavoriteBorderOutlinedIcon onClick={handleToggleLike}/>
            )}
            {likesCountState ? likesCountState : null}
        </span>
    )
};

export default LikeTweet;