import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router';
import { DELETE_COMMENT } from '../../../queries/Comment';
import { TWEET } from '../../../queries/Tweet';


const DeleteComment = ({ id }) => {
    const { tweetId } = useParams();

    const [deleteCommentMutation, { loading }] = useMutation(DELETE_COMMENT, {
        update: (cache, { data: { deleteComment } }) => {
            const { tweet } = cache.readQuery({ 
                query: TWEET,
                variables: {
                    tweetId
                } 
            });

            cache.writeQuery({
                query: TWEET,
                data: {
                    tweet: {
                        ...tweet,
                        commentsCount: tweet.commentsCount - 1,
                        comments: tweet.comments.filter((comment) => comment.id !== deleteComment.id)
                    }
                },
            })
        } 
    });

    const handleDeleteComment = async () => {
        await deleteCommentMutation({
            variables: {
                deleteCommentId: id
            }
        })
    }

    return <DeleteOutlineIcon onClick={handleDeleteComment} />
};

export default DeleteComment;