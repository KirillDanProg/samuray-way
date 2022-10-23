import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer, {DialogsActionsType} from "./dialogsReducer/dialogs-reducer";
import profileReducer, {ProfileActionsType} from "./profileReducer/profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {UsersActionsType, usersReducer} from "./usersReducer/users-reducer";
import {AuthActionsType, authReducer} from "./authReducer/authReducer";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer
})
export type RootState = ReturnType<typeof store.getState>

export type AppType = DialogsReducerType & ProfileReducerType & SidebarReducerType & UsersReducerType
type DialogsReducerType = ReturnType<typeof dialogsReducer>
type ProfileReducerType = ReturnType<typeof profileReducer>
type SidebarReducerType = ReturnType<typeof sidebarReducer>
type UsersReducerType = ReturnType<typeof usersReducer>

export type AppActionsType = UsersActionsType | DialogsActionsType | AuthActionsType | ProfileActionsType


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store

