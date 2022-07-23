import React from 'react';
import './App.css';

import {BrowserRouter, Route, Routes,} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Users} from "./components/Users/Users";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar/>
                <div className="AppContent">
                    <Routes>
                        <Route path="/profile" element={<Profile/>}></Route>
                        <Route path="/dialogs" element={<Dialogs/>}></Route>
                        <Route path="/users" element={<Users/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
