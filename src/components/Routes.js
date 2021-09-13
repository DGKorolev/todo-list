import React, {useState} from 'react';
import {Redirect, Switch, Route} from "react-router-dom";
import Login from "../page/Login";
import {login} from "../services/AuthProvider";
import Registration from "../page/Registration";
import Tasks from "../page/Tasks";
import Error from "./Error";

const MyComponent = ({logged}) => {

    const [error, setError] = useState('')

    return (
        <>
            {error &&
            <Error time={10000} setError={setError}>{error}</Error>
            }

            <Switch>
                {logged
                    ? (
                        <>
                            <Route path="/">
                                <Tasks setError={setError}/>
                            </Route>
                            <Redirect to="/" />
                        </>
                    )
                    : (
                        <>
                            <Route path="/login">
                                <Login login={login} setError={setError}/>
                            </Route>
                            <Route path="/registration">
                                <Registration login={login} setError={setError}/>
                            </Route>
                            <Redirect to="/login" />
                        </>
                    )
                }
            </Switch>

        </>



    )
};

export default MyComponent;
