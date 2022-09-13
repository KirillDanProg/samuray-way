import {ProfileType} from "../../types /ProfileType/ProfileTypes";
import {v1} from "uuid";
import profileReducer, {addPostAC, deletePostAC, updatePostTextAC} from "./profile-reducer";


test("post should be added", () => {

    const initialState: ProfileType = {
        postsData: [
            {id: v1(), postText: "Hello world!", likes: 237, img: "img"},
            {id: v1(), postText: "Bla Bla Bla", likes: 158, img: "img2"},
            {id: v1(), postText: "Looking for a job", likes: 496, img: "img3"},
        ] ,
        profileData: {
            name: "Kirill",
            country: "Russia",
            dateOfBirth: "28.09.1998"
        } ,
        postText: "new post",
        error: false,
        errorMessage: "",
    }

    const newState = profileReducer(initialState, addPostAC())

    expect(newState.postsData.length).toBe(4)

})

test("post text should be updated", () => {
    const initialState: ProfileType = {
        postsData: [
            {id: v1(), postText: "Hello world!", likes: 237, img: "img"},
            {id: v1(), postText: "Bla Bla Bla", likes: 158, img: "img2"},
            {id: v1(), postText: "Looking for a job", likes: 496, img: "img3"},
        ] ,
        profileData: {
            name: "Kirill",
            country: "Russia",
            dateOfBirth: "28.09.1998"
        } ,
        postText: "new post",
        error: false,
        errorMessage: "",
    }
    const newPostText = "new post text"

    const newState = profileReducer(initialState, updatePostTextAC(newPostText))

    expect(newState.postText).toBe(newPostText)
})

test("post should be deleted", () => {
    const initialState: ProfileType = {
        postsData: [
            {id: v1(), postText: "Hello world!", likes: 237, img: "img"},
            {id: v1(), postText: "Bla Bla Bla", likes: 158, img: "img2"},
            {id: v1(), postText: "Looking for a job", likes: 496, img: "img3"},
        ] ,
        profileData: {
            name: "Kirill",
            country: "Russia",
            dateOfBirth: "28.09.1998"
        } ,
        postText: "new post",
        error: false,
        errorMessage: "",
    }
    const id = initialState.postsData[0].id

    const newState = profileReducer(initialState, deletePostAC(id))

    expect(newState.postsData.length).toBe(2)
    expect(newState.postsData[0].likes).toBe(158)
})
export {}