import img3 from "../../assets/monkey.jpeg";
import {v1} from "uuid";
import img from "../../assets/images.jpeg";
import img2 from "../../assets/rick.jpeg";
import {DialogType, MessageDataType} from "../../types /DialogsType/DialogsTypes";

const ADD_MESSAGE = "ADD-MESSAGE"

const initialState = {
    dialogsData: [
        {id: v1(), name: "Kirill", img: img},
        {id: v1(), name: "Alex", img: img2},
        {id: v1(), name: "Chris", img: img3}
    ] as DialogType[],
    messagesData: [
        {id: v1(), message: "Some message text", img: img3},
        {id: v1(), message: "Hello World", img: img2},
        {id: v1(), message: "Lorem ipsum", img: img},
        {id: v1(), message: "bla bla bla bla bla bla", img: img3},
        {id: v1(), message: "Some message text", img: img2},
    ] as MessageDataType[],
}

export type InitialStateType = typeof initialState

export type DialogsActionsType = AddMessageACType

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: v1(),
                message: action.message,
                img: img3
            }
           return {...state, messagesData: [...state.messagesData, newMessage]}
        default:
            return state
    }
}

type AddMessageACType = ReturnType<typeof addMessageAC>

export const addMessageAC = (message: string) => {
    return {
        type: ADD_MESSAGE,
        message
    } as const
}

export default dialogsReducer