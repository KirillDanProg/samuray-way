import {appReducer, InitStateType} from "./app-reducer";
let initialState: InitStateType

beforeEach(() => {
    initialState = {
        isInit: true
    }
})

test("app initializing should be false", () => {

    const action = {
        type: "APP/SET-INITIALIZING",
        payload: {
            initStatus: false
        }
    } as const

    const newState = appReducer(initialState, action)

    expect(newState.isInit).toBe(false)
})

