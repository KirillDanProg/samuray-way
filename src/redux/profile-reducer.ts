import {ActionsType} from "./state";
import {v1} from "uuid";
import img from "./../assets/images.jpeg"
import img2 from "../assets/rick.jpeg";
import img3 from "../assets/monkey.jpeg";
import {ProfileType} from "../types /ProfileType/ProfileTypes";

const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
const DELETE_POST = "DELETE-POST"

const initialState: ProfileType  = {
    postsData: [
        {id: v1(), postText: "Hello world!", likes: 237, img: img},
        {id: v1(), postText: "Bla Bla Bla", likes: 158, img: img2},
        {id: v1(), postText: "Looking for a job", likes: 496, img: img3},
    ],
    profileData: {
        name: "Kirill",
        country: "Russia",
        dateOfBirth: "28.09.1998"
    },
    postText: "",
    error: false,
    errorMessage: "",
}

const profileReducer = (state= initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            if (state.postText.trim()) {
                const newPost = {
                    id: v1(),
                    postText: state.postText,
                    likes: 0,
                    img: img
                }
                return {...state, postsData: [...state.postsData, newPost,], postText: ""}
            } else {
                return {...state, error: true, errorMessage: "field is required"}
            }
        case UPDATE_POST_TEXT:
            return {...state, postText: action.payload}
        case DELETE_POST:
           return {...state, postsData: state.postsData.filter(post => post.id !== action.payload)}
        default:
            return state
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