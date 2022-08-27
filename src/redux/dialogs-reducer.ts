import {ActionsType} from "./state";
import img3 from "../assets/monkey.jpeg";
import {v1} from "uuid";

const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"

const dialogsReducer = (state: any, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.messageText = action.payload
            break;
        case ADD_MESSAGE:
            const newMessage = {
                id: v1(),
                message: state.messageText,
                img: img3
            }
            state.messagesData = [...state.messagesData, newMessage]
            state.messageText = ""
            break;
    }
}

export const updateMessageTextAC = (newMessageText: string) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        payload: newMessageText
    } as const
}

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const
}

export default dialogsReducer