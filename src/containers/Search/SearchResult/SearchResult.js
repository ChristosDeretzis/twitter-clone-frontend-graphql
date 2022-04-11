import React, {useState} from "react";
import SearchResultTags from "../SearchResultTags/SearchResultTags";
import SearchResultTweets from "../SearchResultTweets/SearchResultTweets";
import SearchResultUsers from "../SearchResultUsers/SearchResultUsers";
import "./SearchResult.css";

const SearchResult = (props) => {
    const [searchResultAction, setSearchResultAction] = useState("TWEETS");

	const changeToTweets = () => setSearchResultAction("TWEETS");
	const changeToTags = () => setSearchResultAction("TAGS");
	const changeToUsers = () => setSearchResultAction("USERS");

    return (
        <div className="results_wrapper">
            <div className="tabs">
                <span
                    className={searchResultAction == "TWEETS" ? "span-active" : ""}
                    onClick={changeToTweets}
                >
                    Tweets
                </span>
                <span
                    className={searchResultAction == "TAGS" ? "span-active" : ""}
                    onClick={changeToTags}
                >
                    Tags
                </span>
                <span
                    className={searchResultAction == "USERS" ? "span-active" : ""}
                    onClick={changeToUsers}
                >
                    Users
                </span>
            </div>

            {searchResultAction === "USERS" && (
                <SearchResultUsers users={props.users} loading={props.searchUserLoading} />
            )}

            {searchResultAction === "TWEETS" && (
                <SearchResultTweets tweets={props.tweets} loading={props.searchTweetLoading} />
            )}
            
            {searchResultAction === "TAGS" && (
                <SearchResultTags tags={props.tags} loading={props.searchTagLoading} />
            )}
        </div>
    );
};

export default SearchResult;