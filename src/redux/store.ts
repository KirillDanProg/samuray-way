import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const rootReducer: AppType = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
})

export type AppType = DialogsReducerType & ProfileReducerType & SidebarReducerType
type DialogsReducerType = ReturnType<typeof dialogsReducer>
type ProfileReducerType = ReturnType<typeof profileReducer>
type SidebarReducerType = ReturnType<typeof sidebarReducer>

export const store = createStore(rootReducer)