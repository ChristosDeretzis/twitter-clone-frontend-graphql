import React from "react";
import CustomResponse from "../../../components/CustomResponse/CustomResponse";
import Loader from "../../../components/Loader/Loader";
import Tweet from "../../Tweet/Tweet/Tweet";
import "./SearchResultTweets.css";

const SearchResultTweets = ({ loading, tweets }) => {
    if (loading) return (<Loader />);

    if (tweets === undefined) {
        return (
            <CustomResponse text="Use the search bar to find tags, people and tweets" />
        );
    }

    return (
        <div className="result_tweets_wrapper">
            {tweets.searchByTweet.length ? (
                tweets.searchByTweet.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
            ) : (
                <CustomResponse text="No tweets found, try a different search" />
            )}
        </div>
    );
}

export default SearchResultTweets;