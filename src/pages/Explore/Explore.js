import React from "react";
import SearchInput from "../../containers/Search/SearchInput/SearchInput";
import "./Explore.css";

const Explore = () => {
    return (
        <div className="Explore">
            <div className="Explore-Header">
                <span>Explore</span>
            </div>
            <SearchInput />
        </div>
    )
};

export default Explore;
