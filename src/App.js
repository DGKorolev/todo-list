import './App.css';
import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Login from "./page/Login";
import Registration from "./page/Registration";
import Tasks from "./page/Tasks";
import Navigation from "./components/Navigation";

import {useAuth, login, logout}  from './services/AuthProvider'

function App() {

    const logged = useAuth();

    console.log(logged)

    return (
        <BrowserRouter>
                <Navigation logged={logged} logout={logout}/>

                <Switch>
                    <Route path="/login">
                        <Login login={login}/>
                    </Route>
                    <Route path="/registration">
                        <Registration login={login}/>
                    </Route>
                    <Route path="/">
                        <Tasks/>
                    </Route>
                </Switch>
        </BrowserRouter>
    );
}

export default App;
