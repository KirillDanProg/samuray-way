import React from 'react';
import './App.css';

import {BrowserRouter, Route, Routes,} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Users} from "./components/Users/Users";
import {Friends} from "./components/Friends/Friends";
import {AppPropsType} from "./types /types";


function App({state}: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar sidebar={state.sidebar}/>
                <div className="AppContent">
                    <Routes>
                        <Route path="/profile" element={<Profile profile={state.profile}/>}></Route>
                        <Route path="/dialogs" element={<Dialogs dialogs={state.dialogs}/>}></Route>
                        <Route path="/users" element={<Users/>}></Route>
                        <Route path="/friends" element={<Friends/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
