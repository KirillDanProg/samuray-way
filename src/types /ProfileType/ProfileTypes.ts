export type ProfileType = {
    profileData: ProfileDataType
    postsData: Array<PostDataType>
    postText: string
    error: boolean
    errorMessage: string
}
export type ProfilePropsType = {
    profile: ProfileType
    addPost: () => void
    updatePostText: (newPostText: string) => void
    deletePost: (id: string) => void
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
    addPost: () => void
    updatePostText: (newPostText: string) => void
    postText: string
    error: boolean
    errorMessage: string
}