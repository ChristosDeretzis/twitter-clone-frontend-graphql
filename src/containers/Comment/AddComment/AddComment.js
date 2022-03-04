import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import Avatar from '../../../components/Avatar/Avatar';
import { IS_LOGGED_IN } from '../../../queries/User';
import TextareaAutosize from 'react-textarea-autosize';
import "./AddComment.css";
import Button from '../../../components/Button/Button';
import { ADD_COMMENT } from '../../../queries/Comment';
import { toast } from 'react-toastify';
import { TWEET } from '../../../queries/Tweet';

const AddComment = ({ id }) => {
    const [comment, setComment] = useState("");

    const handleComment = (e) => {
        setComment(e.target.value);
    }

    const [addCommentMutation, { loading }] = useMutation(ADD_COMMENT, {
        update(cache, payload) {
            const { tweet } = cache.readQuery({
                query: TWEET,
                variables: {
                    tweetId: id
                }
            });
            console.log(payload);
            let comments = tweet.comments;
            console.log(comments);
            comments = [...comments, payload.data.addComment];
            
            cache.writeQuery({
                query: TWEET,
                data: {
                    tweet: {
                        ...tweet,
                        commentsCount: tweet.commentsCount + 1,
                        comments
                    }
                }
            });
        }
    });

    const handleAddComment = async (e) => {
        e.preventDefault();

        if(!comment) return toast("Write Something");

        try {
            await addCommentMutation({
                variables: {
                    addCommentId: id,
                    text: comment
                }
            });

            setComment("");
        } catch(e) {
            console.log(e.message);
        }
    }

    const {
        data: { User },
    } = useQuery(IS_LOGGED_IN);

    return (
        <div className="add-comment-wrapper">
            <Avatar src={User.avatar} alt="avatar" />
            <form onSubmit={handleAddComment}>
                <div className="add-comment">
                    <TextareaAutosize 
                            cols="48"
                            maxRows="3"
                            placeholder="Tweet your reply"
                            type="text"
                            className="textarea"
                            value={comment}
                            onChange={handleComment} />

                    <div className="add-comment-action">
                        <Button label="Reply"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddComment;