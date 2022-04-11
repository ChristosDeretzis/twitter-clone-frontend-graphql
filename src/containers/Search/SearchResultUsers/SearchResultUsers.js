import { useThemeProps } from "@mui/material";
import React from "react";
import CustomResponse from "../../../components/CustomResponse/CustomResponse";
import Loader from "../../../components/Loader/Loader";
import User from "../../Profile/User/User";
import "./SearchResultUsers.css";

const SearchResultUsers = ({ loading, users }) => {
    if (loading) return (<Loader />);

    if (users === undefined) {
        return (
            <CustomResponse text="Use the search bar to find tags, people and tweets" />
        );
    }

    return (
        <div className="result_users_wrapper">
            {users.searchByUser.length ? (
                users.searchByUser.map((user) => <User key={user.id} user={user} />)
            ) : (
                <CustomResponse text="No users found, try a different search" />
            )}
        </div>
    );
}

export default SearchResultUsers;