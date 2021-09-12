import React from 'react';
import {Redirect, Switch, Route} from "react-router-dom";
import Login from "../page/Login";
import {login} from "../services/AuthProvider";
import Registration from "../page/Registration";
import Tasks from "../page/Tasks";

const MyComponent = ({logged}) => {

    return (

        <Switch>

            {logged
                ? (
                    <>
                        <Route path="/">
                            <Tasks/>
                        </Route>
                        <Redirect to="/" />
                    </>
                )
                : (
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
            }

        </Switch>

    )
};

export default MyComponent;
