import img from "../assets/images.jpeg";

export type StateType = {
    dialogs: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageDataType>
    }
    profile: {
        profileData: ProfileDataType
        postsData: Array<PostDataType>
    }
    sidebar: {
        friends: Array<FriendType>
    }
}
export type FriendType = {
    id: string
    name: string
    img: string,
}
export type AppPropsType = {
    state: {
        dialogs: {
            dialogsData: Array<DialogType>
            messagesData: Array<MessageDataType>
        }
        profile: {
            profileData: ProfileDataType
            postsData: Array<PostDataType>
        }
        sidebar: {
            friends: Array<FriendType>
        }

    }
}
export type PostDataType = {
    id: string
    postText: string
    likes: number
    img: string
}
export type ProfileDataType = {
    name: string
    country: string
    dateOfBirth: string
}
export type DialogType = {
    id: string
    name: string
    img: string
}
export type MessageDataType = {
    id: string
    message: string
    img: typeof img
}
export type NavLinkComponentType = {
    title: string
    friends?: Array<FriendType>
}