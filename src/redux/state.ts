import {StateType} from "../types /types";
import img from "../assets/images.jpeg";
import img2 from "../assets/rick.jpeg";
import img3 from "../assets/monkey.jpeg";
import {v1} from "uuid";
import {rerenderEntireTree} from "../render";


export const state: StateType = {
    dialogs: {
        dialogsData: [
            {id: v1(), name: "Kirill", img: img},
            {id: v1(), name: "Alex", img: img2},
            {id: v1(), name: "Chris", img: img3}
        ],
        messagesData: [
            {id: v1(), message: "Some message text", img: img3},
            {id: v1(), message: "Hello World", img: img2},
            {id: v1(), message: "Lorem ipsum", img: img},
            {id: v1(), message: "bla bla bla bla bla bla", img: img3},
            {id: v1(), message: "Some message text", img: img2},
        ],
        messageText: "",
    },
    profile: {
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
    },
    sidebar: {
        friends: [
            {id: v1(), name: "Alex", img: img},
            {id: v1(), name: "John", img: img2},
            {id: v1(), name: "Chris", img: img3},
        ]
    }
}

export const addPost = () => {
    if (state.profile.postText.trim()) {
        const newPost = {
            id: v1(),
            postText: state.profile.postText,
            likes: 0,
            img: img
        }
        state.profile.postsData = [...state.profile.postsData, newPost]
        state.profile.postText = ""
        rerenderEntireTree(state)
    } else {
        state.profile.error = true
        state.profile.errorMessage = "field is required"
        rerenderEntireTree(state)
    }
}
export const updatePostText = (newPostText: string) => {
    // state.profile.error = false
    // state.profile.errorMessage = ""
    state.profile.postText = newPostText
    rerenderEntireTree(state)
}

export const deletePost = (id: string) => {
    state.profile.postsData = [...state.profile.postsData].filter(post => post.id !== id)
    rerenderEntireTree(state)
}
export const updateMessageText = (newMessageText: string) => {
    state.dialogs.messageText = newMessageText
    rerenderEntireTree(state)
}
export const addMessage = () => {
    const newMessage = {
        id: v1(),
        message: state.dialogs.messageText,
        img: img3
    }
    state.dialogs.messagesData = [...state.dialogs.messagesData, newMessage]
    state.dialogs.messageText = ""
    rerenderEntireTree(state)
}