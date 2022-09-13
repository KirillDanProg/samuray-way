export type User = {
    id: string
    userName: string
    status?: string
    photo?: string
    followed: boolean
}
const initialState = {
    users: [] as User[],
    error: "" as string,
    totalCount: 5 as number
}
type InitialStateType = typeof initialState


export const usersReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-USERS":
            return {...state, users: [...action.payload.users]}
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.payload.id ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.payload.id ? {...u, followed: false} : u)}
        default:
            return state
    }
}

type ActionsType = setUserACType | followACType | unfollowACType


export type setUserACType = ReturnType<typeof setUsersAC>
export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>

const setUsersAC = (users: User[])  => {
    return {
        type: "SET-USERS",
        payload: {
            users
        }
    } as const
}
const followAC = (id: string) => {
    return {
        type: "FOLLOW",
        payload: {
            id
        }
    } as const
}
const unfollowAC = (id: string) => {
    return {
        type: "UNFOLLOW",
        payload: {
            id
        }
    } as const
}
