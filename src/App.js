import './App.css';
import React from "react";
import {
    BrowserRouter,
    Switch
} from "react-router-dom";
import Navigation from "./components/Navigation";
import {useAuth, logout} from './services/AuthProvider'
import {LoginRoutes, NotLoginRoutes} from './routes'


function App() {

    const logged = useAuth();

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
