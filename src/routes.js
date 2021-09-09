import {Redirect, Route} from "react-router-dom";
import Login from "./page/Login";
import {login} from "./services/AuthProvider";
import Registration from "./page/Registration";
import React from "react";
import Tasks from "./page/Tasks";

export const LoginRoutes = (
    <>
        <Route path="/login">
            <Login login={login}/>
        </Route>
        <Route path="/registration">
            <Registration login={login}/>
        </Route>
        <Redirect to="/login" />
    </>
)

export const NotLoginRoutes = (
    <>
        <Route path="/">
            <Tasks/>
        </Route>
        <Redirect to="/" />
    </>
)
