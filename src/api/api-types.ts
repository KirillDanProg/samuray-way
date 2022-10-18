import {User} from "../redux/usersReducer/users-reducer";

export type ResponseType<T> = {
    resultCode: number
    messages: string[]
    data: T
}
export type AuthMeType = {
    id: number
    email: string
    login: string
}

export type GetUsersType = {
    items: User[]
    totalCount: number
    error: string | null
}

export type ProfileDataType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: object
    github: string
    vk:string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    photos: { small: string, large: string }
}