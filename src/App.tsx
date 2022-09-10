import React, {FC} from 'react';
import './App.css';

import {BrowserRouter, Route, Routes,} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {Users} from "./components/Users/Users";
import {Friends} from "./components/Friends/Friends";
import {AppPropsType} from "./types /types";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


const App: FC<AppPropsType> = ({store}) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar sidebar={store.getState().sidebar}/>
                <div className="AppContent">
                    <Routes>
                        <Route path="/profile" element={<Profile store={store}/>}></Route>
                        <Route path="/dialogs" element={<DialogsContainer store={store} />}/>
                        <Route path="/users" element={<Users/>}/>
                        <Route path="/friends" element={<Friends/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
