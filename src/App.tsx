import React, {FC} from 'react';
import './App.css';

import {BrowserRouter, Route, Routes,} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Users} from "./components/Users/Users";
import {Friends} from "./components/Friends/Friends";
import {AppPropsType} from "./types /types";


const App: FC<AppPropsType> = ({store}) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar sidebar={store.getState().sidebar}/>
                <div className="AppContent">
                    <Routes>
                        <Route path="/profile" element={<Profile profile={store.getState().profile}
                                                                 dispatch={store.dispatch.bind(store)}
                        />}></Route>
                        <Route path="/dialogs" element={<Dialogs dialogs={store.getState().dialogs}
                                                                 dispatch={store.dispatch.bind(store)}
                        />}></Route>
                        <Route path="/users" element={<Users/>}></Route>
                        <Route path="/friends" element={<Friends/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
