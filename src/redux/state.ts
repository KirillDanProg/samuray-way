import {StateType} from "../types /types";
import img from "../assets/images.jpeg";
import img2 from "../assets/rick.jpeg";
import img3 from "../assets/monkey.jpeg";
import {v1} from "uuid";


export const store = {
    _state: {
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
    },

    getState() {
        return this._state
    },

    rerenderEntireTree(x: StateType) {

    },

    subscriber(observer: (state: StateType) => void) {
        this.rerenderEntireTree = observer
    },

    addPost() {
        if (this._state.profile.postText.trim()) {
            const newPost = {
                id: v1(),
                postText: this._state.profile.postText,
                likes: 0,
                img: img
            }
            this._state.profile.postsData = [...this._state.profile.postsData, newPost]
            this._state.profile.postText = ""
            this.rerenderEntireTree(this._state)
        } else {
            this._state.profile.error = true
            this._state.profile.errorMessage = "field is required"
            this.rerenderEntireTree(this._state)
        }
    },
    updatePostText(newPostText: string) {
        this._state.profile.postText = newPostText
        this.rerenderEntireTree(this._state)
    },
    deletePost(id: string) {
        console.log(this)
        this._state.profile.postsData = [...this._state.profile.postsData].filter(post => post.id !== id)
        this.rerenderEntireTree(this._state)
    },
    updateMessageText(newMessageText: string) {
        this._state.dialogs.messageText = newMessageText
        this.rerenderEntireTree(this._state)
    },
    addMessage() {
        const newMessage = {
            id: v1(),
            message: this._state.dialogs.messageText,
            img: img3
        }
        this._state.dialogs.messagesData = [...this._state.dialogs.messagesData, newMessage]
        this._state.dialogs.messageText = ""
        this.rerenderEntireTree(this._state)
    }
}



