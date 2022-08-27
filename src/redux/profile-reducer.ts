import {ActionsType} from "./state";
import {v1} from "uuid";
import img from "./../assets/images.jpeg"

const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
const DELETE_POST = "DELETE-POST"

const profileReducer = (state: any, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            if (state.postText.trim()) {
                const newPost = {
                    id: v1(),
                    postText: state.postText,
                    likes: 0,
                    img: img
                }
                state.postsData = [...state.postsData, newPost]
                state.postText = ""
            } else {
                state.error = true
                state.errorMessage = "field is required"
            }
            break;
        case UPDATE_POST_TEXT:
            state.postText = action.payload
            break;
        case DELETE_POST:
            state.postsData = [...state.postsData].filter(post => post.id !== action.payload)
            break;
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}

export const updatePostTextAC = (newPostText: string) => {
    return {
        type: UPDATE_POST_TEXT,
        payload: newPostText
    } as const
}

export const deletePostAC = (id: string) => {
    return {
        type: DELETE_POST,
        payload: id
    } as const
}


    export default profileReducer