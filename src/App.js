import './App.css';
import React from "react";
import {HashRouter} from "react-router-dom";
import Navigation from "./components/Navigation";
import {useAuth, logout} from './services/AuthProvider'
import Routes from "./components/Routes";

function App() {

    const logged = useAuth();

    return (
        <HashRouter basename="/todo-list">
            <Navigation logged={logged} logout={logout}/>
            <Routes logged={logged}/>
        </HashRouter>
    );
}

export default App;
