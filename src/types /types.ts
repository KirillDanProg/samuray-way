import img from "../assets/images.jpeg";

export type StateType = {
    dialogs: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageDataType>
        messageText: string
    }
    profile: {
        profileData: ProfileDataType
        postsData: Array<PostDataType>
        postText: string
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
            messageText: string
        }
        profile: {
            profileData: ProfileDataType
            postsData: Array<PostDataType>
            postText: string
        }
        sidebar: {
            friends: Array<FriendType>
        }

    }
    addPost: () => void
    updatePostText: (newPostText: string) => void
    deletePost: (id: string) => void
    updateMessageText: (newMessageText: string) => void
    addMessage: () => void
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
export type ProfilePropsType = {
    profile: {
        profileData: ProfileDataType
        postsData: Array<PostDataType>
        postText: string
    }
    addPost: () => void
    updatePostText: (newPostText: string) => void
    deletePost: (id: string) => void
}
export type PostsPropsType = {
    postsData: Array<PostDataType>
    addPost: () => void
    updatePostText: (newPostText: string) => void
    deletePost: (id: string) => void
    postText: string
}
export type NewPostType = {
    addPost: () => void
    updatePostText: (newPostText: string) => void
    postText: string
}

export type DialogsPropsType = {
    dialogs: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageDataType>
        messageText: string
    }
    updateMessageText: (newMessageText: string) => void
    addMessage: () => void
}