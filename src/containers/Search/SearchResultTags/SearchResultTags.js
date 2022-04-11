import React from "react";
import CustomResponse from "../../../components/CustomResponse/CustomResponse";
import Loader from "../../../components/Loader/Loader";
import Tweet from "../../Tweet/Tweet/Tweet";
import "./SearchResultTags.css";

const SearchResultTags = ({ loading, tags }) => {
    if (loading) return (<Loader />);

    if (tags === undefined) {
        return (
            <CustomResponse text="Use the search bar to find tags, people and tweets" />
        );
    }

    return (
        <div className="result_tags_wrapper">
            {tags.searchByTag.length ? (
                tags.searchByTag.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
            ) : (
                <CustomResponse text="No tweets found for that tag, try a different search" />
            )}
        </div>
    );
}

export default SearchResultTags;