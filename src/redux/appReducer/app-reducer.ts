import {authMeTC} from "../authReducer/authReducer";
import {getProfileDataTC} from "../profileReducer/profile-reducer";
import {AppThunk} from "../store";

const initialState = {
    isInit: false
}
export type InitStateType = typeof initialState
export type ActionType = ReturnType<typeof setAppInitializing>


export const appReducer = (state: InitStateType = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "APP/SET-INITIALIZING":
            return {
                ...state,
                isInit: action.payload.initStatus
            }
        default:
            return state
    }
}

export const setAppInitializing = (initStatus: boolean) => {
    return {
        type: "APP/SET-INITIALIZING",
        payload: {
            initStatus
        }
    } as const
}

export const appInit = (): AppThunk => (dispatch, getState) => {
    dispatch(setAppInitializing(false))
    dispatch(authMeTC())
        .then(res => {
            const userID = getState().auth.id
            dispatch(getProfileDataTC(userID as number))
                .then(res => {
                    dispatch(setAppInitializing(true))
                })

        })

}