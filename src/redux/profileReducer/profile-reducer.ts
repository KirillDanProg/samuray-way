import {v1} from "uuid";
import img from "../../assets/images.jpeg"
import {PostDataType, ProfileDataType, ProfileType} from "../../types /ProfileType/ProfileTypes";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../../api/api";

export type ActionsType = ReturnType<typeof deletePostAC> |
    ReturnType<typeof updatePostTextAC> |
    ReturnType<typeof addPostAC> |
    ReturnType<typeof setProfileDataAC> |
    ReturnType<typeof updateUserStatusAC> |
    ReturnType<typeof getUserStatusAC>

const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
const DELETE_POST = "DELETE-POST"
const SET_PROFILE_DATA = "SET-PROFILE-DATA"
const UPDATE_USER_STATUS = "UPDATE-USER-STATUS"
const GET_USER_STATUS = "GET-USER-STATUS"

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
        case UPDATE_USER_STATUS:
            return {...state, profileData: {...state.profileData, status: action.payload.status}}
        case GET_USER_STATUS:
            return {...state, profileData: {...state.profileData, status: action.status}}
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}

export const updateUserStatusAC = (status: string | undefined) => {
    return {
        type: UPDATE_USER_STATUS,
        payload: {
            status
        }
    } as const
}

export const getUserStatusAC = (status: string) => {
    return {
        type: GET_USER_STATUS,
        status
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

export const setProfileDataAC = (data: ProfileDataType) => {
    return {
        type: SET_PROFILE_DATA,
        data
    } as const
}


// THUNK CREATORS
export const getProfileDataTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        userAPI.getProfileData(userId)
            .then(data => {
                dispatch(setProfileDataAC(data))
            })
            .catch(e => {
                console.warn(e.message)
            })
    }

}
export const changeUserStatusTC = (status: string | undefined) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(updateUserStatusAC(status))
                }
            })
            .catch(err => console.warn(err))
    }
}
export const getUserStatusTC = (id: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserStatus(id)
            .then(data => dispatch(getUserStatusAC(data)))
            .catch(err => console.warn(err))
    }
}

export default profileReducer