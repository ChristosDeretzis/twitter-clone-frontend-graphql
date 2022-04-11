import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import EditProfile from "./containers/Profile/EditProfile/EditProfile";
import Profile from "./containers/Profile/Profile";
import MasterTweet from "./containers/Tweet/Tweet/MasterTweet/MasterTweet";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import "./Route.css";

const Router = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    return (
      <BrowserRouter>
        <Sidebar />
        <div className="Layout">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path={`/:handle/status/:tweetId`} element={<MasterTweet />} />
            <Route exact path={'/:handle'} element={<Profile />}/>
            <Route exact path={"/settings/profile"} element={<EditProfile />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  };
  
  export default Router;
