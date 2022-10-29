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
export enum ResultCode {
    Ok = 0,
    Failed = 1,
    Captcha = 2
}

export type RequestStatusType = "idle" | "failed" | "succeeded" | "loading"