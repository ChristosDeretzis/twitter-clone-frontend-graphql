import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../components/Avatar/Avatar';
import TweetFile from '../../../components/TweetFile/TweetFile';
import LikeTweet from './TweetStats/LikeTweet';
import Retweet from './TweetStats/Retweet';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import "./Tweet.css";
import DeleteTweet from './TweetStats/DeleteTweet';

const Tweet = (props) => {
    const {
        id,
        text,
        tags,
        user,
        files,
        isTweetMine,
        isLiked,
        likesCount,
        isRetweet,
        retweetsCount,
        commentsCount,
        createdAt
    } = props.tweet;

    const username = user && user.userName;

    const strList = text.split(" ");
    const preprocessedText = strList.filter((str) => !str.startsWith("#")).join(" ");

    return (
        <div className="tweet-wrapper">
            <Link to={`/${username}`}>
                <Avatar src={user && user.avatar} alt="avatar" />
            </Link>

            <div className="tweet-info">
                <div className="tweet-info-user">
                    <span className="username">{user && user.fullname}</span>
                    <span className="secondary">{`@${username} ·`}</span>
                    <span className="secondary">{moment(parseInt(createdAt)).fromNow()}</span>
                </div>

                <div className="text">
                    <Link to={`/${username}/status/${id}`}>
                        <p>{preprocessedText} &nbsp;</p>
                    </Link>

                    <div className="tags">
                        {tags.length 
                            ? tags.map((tag) => (
                                <span key={tag} className="tag">
                                    {tag.text} &nbsp;
                                </span>
                            )) 
                            : null
                        }
                    </div>
                </div>
                

                <Link to={`/${username}/status/${id}`}>
                    {files && files.length && files[0] ? (
                            <TweetFile src={files[0].url} alt="tweet-file" />
                    ) : null}
                </Link>

                <div className="tweet-stats">
                    <div>
                        <span className="comment">
                            <Link to={`/${username}/status/${id}`}>
                                <ChatBubbleOutlineIcon style={{color: '#000'}}/>
                                {commentsCount ? commentsCount : null}
                            </Link>
                        </span>
                    </div>
                    <div>
                        <Retweet
                            id={id}
                            isRetweet={isRetweet}
                            retweetsCount={retweetsCount}
                        />
                    </div>
                    <div>
                        <LikeTweet
                            id={id}
                            isLiked={isLiked}
                            likesCount={likesCount}
                        />
                    </div>
                    <div>
                        {isTweetMine ? <DeleteTweet id={id} /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Tweet;