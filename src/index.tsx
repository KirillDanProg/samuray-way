import {addMessage, addPost, deletePost, state, subscriber, updateMessageText, updatePostText} from "./redux/state";
import {StateType} from "./types /types";
import App from "./App";
import ReactDOM from "react-dom";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}
             updatePostText={updatePostText}
             updateMessageText={updateMessageText}
             addMessage={addMessage}
             deletePost={deletePost}/>, document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscriber(rerenderEntireTree)