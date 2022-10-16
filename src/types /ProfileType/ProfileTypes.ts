export type ProfileType = {
    profileData: ProfileDataType
    postsData: Array<PostDataType>
    postText: string
    error: boolean
    errorMessage: string
}

export type ProfileDataType = {
    userId: string
    fullName: string
    photos: { small?: string | null, large?: string | null }
    followed: boolean
    status?: string
    follow?: (id: string) => void
    unfollow?: (id: string) => void
}
export type PostDataType = {
    id: string
    postText: string
    likes: number
    img: string
}
