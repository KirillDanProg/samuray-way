
export type ProfileType = {
    profileData: ProfileDataType
    postsData: Array<PostDataType>
    postText: string
    error: boolean
    errorMessage: string
}

export type ProfileDataType = ProfileDataTypeAPI & {
    followed: boolean
    status: string
    follow?: (id: string) => void
    unfollow?: (id: string) => void
}

export type ProfileDataTypeAPI = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts?: {
        github: string
        vk:string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }

    photos: { small: string, large: string }
}
export type PostDataType = {
    id: string
    postText: string
    likes: number
    img: string
}
