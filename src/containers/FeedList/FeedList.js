import { useApolloClient, useQuery } from '@apollo/client';
import React from 'react';
import CustomResponse from '../../components/CustomResponse/CustomResponse';
import Loader from '../../components/Loader/Loader';
import client from '../../apollo/client';
import { FEED } from '../../queries/Others';
import { IS_LOGGED_IN } from '../../queries/User';
import Tweet from '../Tweet/Tweet/Tweet';
import { useState } from 'react';

const FeedList = (props) => {
    const [feedData, setFeedData] = useState([]);
    const { data, loading } = useQuery(FEED);

    if (loading) return <Loader />;

    if(data === undefined) {
        localStorage.clear();
        client.writeQuery({
            query: IS_LOGGED_IN,
            data: {
                IsLoggedIn: false,
                User: null
            }
        });
    }
    console.log(data.feed);
    return (
        <div>
            {data.feed.length ? 
                (data.feed.map(tweet => <Tweet key={tweet.id} tweet={tweet} />))
            : (<CustomResponse text="Follow some people to get tweets" />)}
        </div>
    )
    
}

export default FeedList;