import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../store";
import {AnyAction} from "redux";
import {userAPI} from "../../api/api";

export type User = {
    id: string
    name: string
    status?: string
    photos: { small: string, large: string }
    followed: boolean
}
const initialState = {
    users: [] as User[],
    error: "" ,
    total: 0 ,
    count: 10 ,
    page: 1 ,
    disabled: null as string | null
}
export type InitialUsersStateType = typeof initialState

enum Actions {
    SET_USERS = "SET-USERS",
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_PAGE = "SET-PAGE",
    SET_TOTAL = "SET-TOTAL",
    SET_DISABLE = "SET-DISABLE",
}

export const usersReducer = (state: InitialUsersStateType = initialState, action: UsersActionsType): InitialUsersStateType => {
    switch (action.type) {
        case Actions.SET_USERS:
            return {...state, users: [...action.payload.users]}
        case Actions.FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.payload.id ? {...u, followed: true} : u)}
        case Actions.UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.payload.id ? {...u, followed: false} : u)}
        case Actions.SET_PAGE:
            return {...state, page: action.page}
        case Actions.SET_TOTAL:
            return {...state, total: action.total}
        case Actions.SET_DISABLE:
            return {...state, disabled: action.id}
        default:
            return state
    }
}

export type UsersActionsType = setUserACType | followACType | unfollowACType | setPageACType | setTotalACType | setDisableACType


export type setUserACType = ReturnType<typeof setUsersAC>
export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setPageACType = ReturnType<typeof setPageAC>
export type setTotalACType = ReturnType<typeof setTotalAC>
export type setDisableACType = ReturnType<typeof setDisableAC>

export const setUsersAC = (users: User[]) => {
    return {
        type: "SET-USERS",
        payload: {
            users
        }
    } as const
}
export const followAC = (id: string) => {
    return {
        type: "FOLLOW",
        payload: {
            id
        }
    } as const
}
export const unfollowAC = (id: string) => {
    return {
        type: "UNFOLLOW",
        payload: {
            id
        }
    } as const
}
export const setPageAC = (page: number) => {
    return {
        type: Actions.SET_PAGE,
        page
    } as const
}
export const setTotalAC = (total: number) => {
    return {
        type: Actions.SET_TOTAL,
        total
    } as const
}

export const setDisableAC = (id: string | null) => {
    return {
        type: Actions.SET_DISABLE,
        id
    } as const
}

// THUNK CREATORS
export const getUsersTC = (page: number, count: number) => {
    return (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
        userAPI.getUsers(page, count)
            .then(data => {
                dispatch(setUsersAC(data.items))
                dispatch(setTotalAC(data.totalCount))
            })
    }
}
export const followTC = (id: string) => {
    return (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
        setDisableAC(id)
        userAPI.follow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(id))
                dispatch(setDisableAC(null))
            }
        })
    }
}
export const unfollowTC = (id: string) => {
    return (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
        userAPI.unfollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(id))
                dispatch(setDisableAC(null))
            }
        })
    }
}