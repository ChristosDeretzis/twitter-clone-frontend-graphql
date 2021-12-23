import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";

const Router = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    return (
      <div>
        <Sidebar />
      </div>
    );
  };
  
  export default Router;
