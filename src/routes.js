import {Redirect, Route} from "react-router-dom";
import Login from "./page/Login";
import {login} from "./services/AuthProvider";
import Registration from "./page/Registration";
import React from "react";
import Tasks from "./page/Tasks";



export const LoginRoutes = (
    <>
        <Route path={`${process.env.REACT_APP_PATH_GH_PAGE}/login`}>
            <Login login={login}/>
        </Route>
        <Route path={`${process.env.REACT_APP_PATH_GH_PAGE}/registration`}>
            <Registration login={login}/>
        </Route>
        <Redirect path={`${process.env.REACT_APP_PATH_GH_PAGE}/login`}/>
    </>
)

export const NotLoginRoutes = (
    <>
        <Route path={`${process.env.REACT_APP_PATH_GH_PAGE}/`}>
            <Tasks/>
        </Route>
        <Redirect to={`${process.env.REACT_APP_PATH_GH_PAGE}/`} />
    </>
)
