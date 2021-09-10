import {Redirect, Route} from "react-router-dom";
import Login from "./page/Login";
import {login} from "./services/AuthProvider";
import Registration from "./page/Registration";
import React from "react";
import Tasks from "./page/Tasks";

const path = '/todo-list'

export const LoginRoutes = (
    <>
        <Route path={`${path}/login`}>
            <Login login={login}/>
        </Route>
        <Route path={`${path}/registration`}>
            <Registration login={login}/>
        </Route>
        <Redirect path={`${path}/login`}/>
    </>
)

export const NotLoginRoutes = (
    <>
        <Route path={`${path}/`}>
            <Tasks/>
        </Route>
        <Redirect to={`${path}/`} />
    </>
)
