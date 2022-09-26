import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer/dialogs-reducer";
import profileReducer from "./profileReducer/profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {usersReducer} from "./usersReducer/users-reducer";

const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    users: usersReducer
})
export type RootState = ReturnType<typeof store.getState>

export type AppType = DialogsReducerType & ProfileReducerType & SidebarReducerType & UsersReducerType
type DialogsReducerType = ReturnType<typeof dialogsReducer>
type ProfileReducerType = ReturnType<typeof profileReducer>
type SidebarReducerType = ReturnType<typeof sidebarReducer>
type UsersReducerType = ReturnType<typeof usersReducer>

export const store = createStore(rootReducer)