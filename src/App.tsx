import React, {useEffect} from 'react';
import './App.css';

import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Friends} from "./components/Friends/Friends";
import {Profile} from "./components/Profile/Profile";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {authMeTC} from "./redux/authReducer/authReducer";
import {useAppDispatch, useAppSelector} from "./common/hooks";


const App = () => {
    const email = useAppSelector(state => state.auth.email)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(authMeTC())
    }, [])

    useEffect(() => {
        dispatch(authMeTC())
    }, [email])
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
                        <Route path="/login" element={<LoginContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
