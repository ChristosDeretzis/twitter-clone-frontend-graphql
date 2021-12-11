import React from "react";

const Router = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    return (
      <h1>Welcome {user.fullname}</h1>
      
    );
  };
  
  export default Router;
