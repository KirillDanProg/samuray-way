import {StateType} from "./types /types";
import App from "./App";
import ReactDOM from "react-dom";
import {store} from "./redux/state";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App store={store} />, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscriber(rerenderEntireTree)