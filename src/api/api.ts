import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "98c53cec-c5b7-4a19-9abc-502320b1a878"
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
            .then(res => res.data)
    }
}