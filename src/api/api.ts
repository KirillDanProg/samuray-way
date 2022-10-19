import axios from "axios";
import {LoginDataType} from "../components/Login/Login";
import {AuthMeType, GetUsersType, ResponseType} from "./api-types";
import {ProfileDataType} from "../types /ProfileType/ProfileTypes";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "9f48b4f2-831b-466a-bf4d-633124c29eba"
    }
})

export const userAPI = {
    follow: (id: string) => {
        return instance.post<ResponseType<{}>>(`follow/${id}`).then(res => res.data)
    },
    unfollow: (id: string) => {
        return instance.delete<ResponseType<{}>>(`follow/${id}`).then(res => res.data)
    },
    getUsers: (page: number, count: number) => {
        return instance.get<GetUsersType>(`users?page=${page}&count=${count}`)
            .then(res => {
                return res.data
            })
    },
    getProfileData: (id: number) => {
        return profileAPI.getProfileData(id)
    }
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<AuthMeType>>("auth/me")
    },
    login(data: LoginDataType) {
        return instance.post<ResponseType<{ userId: number }>>("auth/login", {email: data.login, password: data.password})
    },
    logout() {
        return instance.delete<ResponseType<{}>>("auth/login")
    }
}
export const profileAPI = {
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`).then(res => {
            return res.data
        })
    },
    getProfileData: (id: number) => {
        return instance.get<ProfileDataType>(`profile/${id}`)
            .then(res => res.data)
    },
    updateUserStatus: (status: string) => {
        return instance.put<ResponseType<{ }>>(`profile/status`, {status: status}).then(res => {
            return res.data
        })
    }
}