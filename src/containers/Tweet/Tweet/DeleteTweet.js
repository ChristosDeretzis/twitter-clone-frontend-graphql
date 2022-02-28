import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useMutation } from '@apollo/client';
import { DELETE_TWEET } from '../../../queries/Tweet';
import { FEED } from '../../../queries/Others';

const DeleteTweet = ({ id }) => {
    const [deleteTweetMutation, { loading }] = useMutation(DELETE_TWEET, {
        update: (cache, { data: { deleteTweet } }) => {
            const { feed } = cache.readQuery({ query: FEED });
            cache.writeQuery({
                query: FEED,
                data: {
                    feed: feed.filter((tweet) => tweet.id !== deleteTweet.id),
                },
            })
        } 
    });

    const handleDeleteTweet = async () => {
        await deleteTweetMutation({
            variables: {
                deleteTweetId: id
            }
        })
    }

    return <DeleteOutlineIcon onClick={handleDeleteTweet} />
};

export default DeleteTweet;