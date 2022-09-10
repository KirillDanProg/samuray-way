
export type ProfileType = {
    profileData: ProfileDataType
    postsData: Array<PostDataType>
    postText: string
    error: boolean
    errorMessage: string
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
