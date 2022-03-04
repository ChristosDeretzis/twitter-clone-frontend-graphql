import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar';
import "./Comment.css";
import DeleteComment from './DeleteComment/DeleteComment';

const Comment = ({ comment }) => {
    const { id, text, isCommentMine, user, createdAt } = comment;

    const username = user && user.userName;

    return (
        <div className="comment-wrapper">
            <Link to={`/${username}`}>
                <Avatar src={user && user.avatar} alt="avatar" />
            </Link>

            <div className="comment-info">
                <div className="comment-info-user">
                    <span className="username">{user && user.fullname}</span>
                    <span className="secondary">{`@${username} ·`}</span>
                    <span className="secondary">{moment(parseInt(createdAt)).fromNow()}</span>
                    <span>{isCommentMine ? <DeleteComment id={id} /> : null}</span>
                </div>

                <div className="text">
                    <p>{text}</p>   
                </div>
            </div> 

            
        </div>
    );
}

export default Comment;