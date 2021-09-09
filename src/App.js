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
import {useAuth, login, logout} from './services/AuthProvider'
import {LoginRoutes, NotLoginRoutes} from './routes'


function App() {

    const logged = useAuth();

    console.log(logged)

    return (
        <BrowserRouter>

            <Navigation logged={logged} logout={logout}/>

            <Switch>
                {!logged
                    ? LoginRoutes
                    : NotLoginRoutes
                }

            </Switch>

        </BrowserRouter>
    );
}

export default App;
