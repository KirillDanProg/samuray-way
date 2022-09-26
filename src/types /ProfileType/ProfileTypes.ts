
export type ProfileType = {
    profileData: ProfileDataType
    postsData: Array<PostDataType>
    postText: string
    error: boolean
    errorMessage: string
}

export type ProfileDataType = {} | null

export type PostDataType = any
