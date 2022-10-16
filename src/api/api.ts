import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "9f48b4f2-831b-466a-bf4d-633124c29eba"
    }
})

export const userAPI = {
    follow: (id: string) => {
        return instance.post(`follow/${id}`).then(res => res.data)
    },
    unfollow: (id: string) => {
        return instance.delete(`follow/${id}`).then(res => res.data)
    },
    getUsers: (page: number, count: number) => {
        return instance.get(`users?page=${page}&count=${count}`)
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
        return instance.get("auth/me")
    }
}
export const profileAPI = {
    getUserStatus(userId:number) {
        return instance.get(`profile/status/${userId}`).then(res => {
           return res.data
        })
    },
    getProfileData: (id: number) => {
        return instance.get(`profile/${id}`)
            .then(res => res.data)
    },
    updateUserStatus: (status: string | undefined) => {
        return instance.put(`profile/status`, {status: status}).then(res => {
          return res.data
        })
    }
}