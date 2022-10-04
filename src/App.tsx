import React from 'react';
import './App.css';

import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Friends} from "./components/Friends/Friends";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Profile} from "./components/Profile/Profile";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <Sidebar/>
                <div className="AppContent">
                    <Routes>
                        <Route path="/profile" element={<Profile/>}>
                            <Route path={":userId"}/>
                        </Route>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/friends" element={<Friends/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
