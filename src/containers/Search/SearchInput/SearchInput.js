import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { SEARCH_BY_TAG, SEARCH_BY_TWEET, SEARCH_BY_USER } from "../../../queries/Search";
import SearchResult from "../SearchResult/SearchResult";
import "./SearchInput.css";

const SearchInput = () => {
    const [term, setTerm] = useState("");

    const onChangeTerm = (e) => {
        setTerm(e.target.value);
    };

    const [
        searchByUser, 
        { data: searchUserData, loading: searchUserLoading },
    ] = useLazyQuery(SEARCH_BY_USER);

    const [
        searchByTweet, 
        { data: searchTweetData, loading: searchTweetLoading },
    ] = useLazyQuery(SEARCH_BY_TWEET);

    const [
        searchByTag, 
        { data: searchTagData, loading: searchTagLoading },
    ] = useLazyQuery(SEARCH_BY_TAG);

    const handleSearch = async (e) => {
        e.preventDefault();

        if(!term) {
            return alert("Enter something to search");
        }

        try {
            await searchByUser({ variables: { term: term }});
            await searchByTweet({ variables: { term: term }});
            await searchByTag({ variables: { term: term }});

        } catch (err) {
            alert(err.message);
        }

        setTerm("");
    }

    return (
        <>
            <div className="search-wrapper">
                <form onSubmit={(e) => handleSearch(e)}>
                    <input
                        placeholder="Search by tags, tweets, people"
                        type="text"
                        onChange={onChangeTerm}
                        value={term}
                    />
                </form>
            </div>
            <SearchResult 
                tags={searchTagData}
                tweets={searchTweetData}
                users={searchUserData}
                searchTagLoading={searchTagLoading}
                searchTweetLoading={searchTweetLoading}
                searchUserLoading={searchUserLoading}/>
        </>
        
        
    );
};

export default SearchInput;