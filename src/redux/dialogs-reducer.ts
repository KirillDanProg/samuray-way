import {ActionsType} from "./state";
import img3 from "../assets/monkey.jpeg";
import {v1} from "uuid";
import img from "../assets/images.jpeg";
import img2 from "../assets/rick.jpeg";

const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"

const initialState = {
    dialogsData: [
        {id: v1(), name: "Kirill", img: img},
        {id: v1(), name: "Alex", img: img2},
        {id: v1(), name: "Chris", img: img3}
    ],
    messagesData: [
        {id: v1(), message: "Some message text", img: img3},
        {id: v1(), message: "Hello World", img: img2},
        {id: v1(), message: "Lorem ipsum", img: img},
        {id: v1(), message: "bla bla bla bla bla bla", img: img3},
        {id: v1(), message: "Some message text", img: img2},
    ],
    messageText: "",
}

const dialogsReducer = (state: any = initialState, action: ActionsType): any => {
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
        default:
            return state
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