import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';
import CustomResponse from '../../../../components/CustomResponse/CustomResponse';
import Loader from '../../../../components/Loader/Loader';
import { TWEET } from '../../../../queries/Tweet';
import AddComment from '../../../Comment/AddComment/AddComment';
import Comment from '../../../Comment/Comment';
import Tweet from '../Tweet';
import "./MasterTweet.css";

const MasterTweet = () => {
    const { tweetId } = useParams();
    const id = tweetId.toString();
    
    const { data, loading } = useQuery(TWEET, { variables: { tweetId: id} });
    console.log(data);

    return (
      <div className="master-tweet-wrapper">
          <div className="Header">
              <span>Tweet</span>
          </div>
          {loading ? (
            <Loader />
        ) : (
            <>
              {data && data.tweet && data.tweet.id ? (
                  <Tweet tweet={data && data.tweet} />
              ) : (
                  <CustomResponse text="The tweet you are looking for does not exist" />
              )}  
              {data && data.tweet && data.tweet.id ? (
                  <AddComment id={data.tweet.id} />
              ) : null}
              {data && data.tweet && data.tweet.comments ? (
                  data.tweet.comments.map((comment) => (
                      <Comment comment={comment} />
                  ))
              ) : null}
            </>)}
      </div>  
    );
}

export default MasterTweet;