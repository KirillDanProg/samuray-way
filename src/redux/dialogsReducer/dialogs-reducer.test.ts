import {DialogType, MessageDataType} from "../../types /DialogsType/DialogsTypes";
import {v1} from "uuid";
import dialogsReducer, {addMessageAC, updateMessageTextAC} from "./dialogs-reducer";

test("message should be added", () => {

    const initialState = {
        dialogsData: [
            {id: v1(), name: "Kirill", img: "img"},
            {id: v1(), name: "Alex", img: "img2"},
        ] as DialogType[],
        messagesData: [
            {id: v1(), message: "Some message text", img: "img3"},
            {id: v1(), message: "Hello World", img: "img2"},

        ] as MessageDataType[],
        messageText: "" as string,
    }

    const newState = dialogsReducer(initialState, addMessageAC())

    expect(newState.messagesData.length).toBe(3)
})
test("message should be updated", () => {
    const initialState = {
        dialogsData: [
            {id: v1(), name: "Kirill", img: "img"},
            {id: v1(), name: "Alex", img: "img2"},
        ] as DialogType[],
        messagesData: [
            {id: v1(), message: "Some message text", img: "img3"},
            {id: v1(), message: "Hello World", img: "img2"},

        ] as MessageDataType[],
        messageText: "" as string,
    }

    const newMessage = "new message"

    const newState = dialogsReducer(initialState, updateMessageTextAC(newMessage))

    expect(newState.messageText).toBe(newMessage)
})


