import React from "react";
import NewTweet from "../../containers/Tweet/NewTweet/NewTweet";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div className="Header">
                <span>Home</span>
            </div>
            <NewTweet />
        </div>
    )
};

export default Home;