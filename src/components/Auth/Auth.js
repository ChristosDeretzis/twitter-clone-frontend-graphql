import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export const Auth = () => {
    const [authAction, setAuthAction] = useState("LOGIN");
    const changeToLogin = () => setAuthAction("LOGIN");
    const changeToSignup = () => setAuthAction("SIGNUP");

    return (
        <>
        {authAction === "LOGIN" ? 
            (<Login toggle={changeToSignup} />) : 
            (<SignUp toggle={changeToLogin} /> )}
        </>
    )
}