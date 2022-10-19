import {DialogType, MessageDataType} from "../../types /DialogsType/DialogsTypes";
import {v1} from "uuid";
import dialogsReducer, {addMessageAC, InitialStateType} from "./dialogs-reducer";

let initialState: InitialStateType

beforeEach(() => {
    initialState = {
        dialogsData: [
            {id: v1(), name: "Kirill", img: "img"},
            {id: v1(), name: "Alex", img: "img2"},
        ] as DialogType[],
        messagesData: [
            {id: v1(), message: "Some message text", img: "img3"},
            {id: v1(), message: "Hello World", img: "img2"},

        ] as MessageDataType[],
    }
})

test("message should be added", () => {

    const message = "wqe"
    const newState = dialogsReducer(initialState, addMessageAC(message))

    expect(newState.messagesData.length).toBe(3)
})


