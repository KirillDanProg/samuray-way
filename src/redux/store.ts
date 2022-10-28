import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer, {DialogsActionsType} from "./dialogsReducer/dialogs-reducer";
import profileReducer, {ProfileActionsType} from "./profileReducer/profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {UsersActionsType, usersReducer} from "./usersReducer/users-reducer";
import {AuthActionsType, authReducer} from "./authReducer/authReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {appReducer} from "./appReducer/app-reducer";

const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
    application: appReducer
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppActionsType = UsersActionsType | DialogsActionsType | AuthActionsType | ProfileActionsType

export type AppThunk<ReturnType = any> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
    >
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store

