import {ActionsType} from "../../redux/state";

export type ProfileType = {
    profileData: ProfileDataType
    postsData: Array<PostDataType>
    postText: string
    error: boolean
    errorMessage: string
}
export type ProfilePropsType = {
    profile: ProfileType
    dispatch: (action: ActionsType) => void
}
export type ProfileDataType = {
    name: string
    country: string
    dateOfBirth: string
}
export type PostDataType = {
    id: string
    postText: string
    likes: number
    img: string
}
export type NewPostType = {
    dispatch: (action: ActionsType) => void
    postText: string
    error: boolean
    errorMessage: string
}