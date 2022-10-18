import {authAPI} from "../../api/api";
import {Dispatch} from "redux";
import {LoginDataType} from "../../components/Login/Login";

export type initialAuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isLogin?: boolean
}
const initialState = {
    id: null,
    email: null,
    login: null,
    isLogin: false
}
type ActionsType = ReturnType<typeof authMe> |
    ReturnType<typeof isLogin>

export const USER_AUTH = "USER-AUTH"
export const LOGINIZATION = "LOGINIZATION"


export const authReducer = (state: initialAuthStateType = initialState, action: ActionsType): initialAuthStateType => {
    switch (action.type) {
        case USER_AUTH:
            return {
                ...state,
                id: action.payload.id,
                login: action.payload.login,
                email: action.payload.email,
            }
        case LOGINIZATION:
            return {...state, isLogin: action.payload.isLogin}
        default:
            return state
    }
}


export const authMe = (id: number | null, login: string | null, email: string | null) => {

    return {
        type: USER_AUTH,
        payload: {
            id,
            email,
            login,
        }
    } as const
}
const isLogin = (isLogin: boolean) => {
    return {
        type: LOGINIZATION,
        payload: {
            isLogin
        }
    }as const
}

export const authMeTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(response => response.data.data)
            .then(data => {
                dispatch(authMe(data.id, data.login, data.email))
            })
    }
}
export const loginTC = (data: LoginDataType) => {
    return (dispatch: Dispatch) => {
        authAPI.login(data).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(isLogin(true))
            }
        })
    }
}

export const logoutTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(authMe(null, null, null))
                    dispatch(isLogin(false))
                }
            })
    }
}