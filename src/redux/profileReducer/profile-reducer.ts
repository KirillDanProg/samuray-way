import {v1} from "uuid";
import img from "../../assets/images.jpeg"
import {PostDataType, ProfileDataType, ProfileType} from "../../types /ProfileType/ProfileTypes";
import {Dispatch} from "redux";
import {userAPI} from "../../api/api";

export type ActionsType = ReturnType<typeof deletePostAC> |
    ReturnType<typeof updatePostTextAC> |
    ReturnType<typeof addPostAC> |
    ReturnType<typeof setProfileDataAC>

const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
const DELETE_POST = "DELETE-POST"
const SET_PROFILE_DATA = "SET-PROFILE-DATA"

const initialState: ProfileType = {
    postsData: [] as PostDataType[],
    profileData: {} as ProfileDataType,
    postText: "",
    error: false,
    errorMessage: "",
}


const profileReducer = (state: ProfileType = initialState, action: ActionsType): ProfileType => {
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
        case SET_PROFILE_DATA:
            return {...state, profileData: action.data}
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

export type DataType = {
    data: ProfileDataType
}
export const setProfileDataAC = (data: ProfileDataType) => {
    return {
        type: SET_PROFILE_DATA,
        data
    } as const
}

export const getProfileDataTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        userAPI.getProfileData(userId)
            .then(data => {
                dispatch(setProfileDataAC(data))
            })
    }

}
export default profileReducer