import App from "./App";
import ReactDOM from "react-dom";
import {store} from "./redux/store";


export const rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <App store={store} />, document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())


store.subscribe(() => {
    rerenderEntireTree(store.getState())
})