export type User = {
    id: string
    name: string
    status?: string
    photo?: string
    followed: boolean
}
const initialState = {
    users: [] as User[],
    error: "" as string,
    totalCount: 5 as number
}
export type InitialUsersStateType = typeof initialState

enum Actions {
    SET_USERS = "SET-USERS",
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW"
}

export const usersReducer = (state: InitialUsersStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case Actions.SET_USERS:
            return {...state, users: [...action.payload.users]}
        case Actions.FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.payload.id ? {...u, followed: true} : u)}
        case Actions.UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.payload.id ? {...u, followed: false} : u)}
        default:
            return state
    }
}

type ActionsType = setUserACType | followACType | unfollowACType


export type setUserACType = ReturnType<typeof setUsersAC>
export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>

export const setUsersAC = (users: User[])  => {
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
        type:  "UNFOLLOW",
        payload: {
            id
        }
    } as const
}
