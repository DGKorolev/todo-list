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
import {useAuth, authFetch, login, logout} from './services/AuthProvider'

function App() {

    const [logged] = useAuth();

    return (
        <BrowserRouter>
                <Navigation/>

                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/registration">
                        <Registration/>
                    </Route>
                    <Route path="/">
                        <Tasks/>
                    </Route>
                </Switch>
        </BrowserRouter>
    );
}

export default App;
