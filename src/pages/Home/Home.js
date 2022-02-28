import React from "react";
import FeedList from "../../containers/FeedList/FeedList";
import NewTweet from "../../containers/Tweet/NewTweet/NewTweet";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div className="Header">
                <span>Home</span>
            </div>
            <NewTweet />
            <FeedList />
        </div>
    )
};

export default Home;