import './App.css';
import React from "react";
import {
    HashRouter,
    BrowserRouter,
    Switch
} from "react-router-dom";
import Navigation from "./components/Navigation";
import {useAuth, logout} from './services/AuthProvider'
import Routes from "./components/Routes";


function App() {

    const logged = useAuth();

    return (
            <HashRouter basename={process.env.PUBLIC_URL}>
            <Navigation logged={logged} logout={logout}/>
            <Routes/>
        </HashRouter>
    );
}

export default App;
