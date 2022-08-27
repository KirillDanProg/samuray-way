import {ProfileType} from "./ProfileType/ProfileTypes";
import {DialogType, MessageDataType} from "./DialogsType/DialogsTypes";
import {ActionsType} from "../redux/state";

export type StateType = {
    dialogs: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageDataType>
        messageText: string
    }
    profile: ProfileType
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
    store: {
        _state: StateType
        getState: () => StateType
        dispatch: (action: ActionsType) => void
        // addPost: () => void
        // updatePostText: (newPostText: string) => void
        // deletePost: (id: string) => void
        // updateMessageText: (newMessageText: string) => void
        // addMessage: () => void
    }

}

export type NavLinkComponentType = {
    title: string
    friends?: Array<FriendType>
}





