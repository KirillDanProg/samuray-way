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


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar sidebar={props.store.getState().sidebar}/>
                <div className="AppContent">
                    <Routes>
                        <Route path="/profile" element={<Profile profile={props.store.getState().profile}
                                                                 addPost={props.store.addPost.bind(props.store)}
                                                                 deletePost={props.store.deletePost.bind(props.store)}
                                                                 updatePostText={props.store.updatePostText.bind(props.store)}
                        />}></Route>
                        <Route path="/dialogs" element={<Dialogs updateMessageText={props.store.updateMessageText.bind(props.store)}
                                                                 addMessage={props.store.addMessage.bind(props.store)}
                                                                 dialogs={props.store.getState().dialogs}/>}></Route>
                        <Route path="/users" element={<Users/>}></Route>
                        <Route path="/friends" element={<Friends/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
