export type DialogType = {
    id: string
    name: string
    img: string
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
export type MessageDataType = {
    id: string
    message: string
    img:  string
}