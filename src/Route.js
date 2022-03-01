import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MasterTweet from "./containers/Tweet/Tweet/MasterTweet/MasterTweet";
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
            <Route exact path={`/:handle/status/:tweetId`} element={<MasterTweet />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  };
  
  export default Router;
