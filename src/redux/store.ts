import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const reducers = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
})
export const store = createStore(reducers)