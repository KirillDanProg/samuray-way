export type User = {
    id: string
    name: string
    status?: string
    photos: {small:  string | null, large: string | null}
    followed: boolean
}
const initialState = {
    users: [] as User[],
    error: "" as string,
    total: 0 as number,
    count: 10 as number,
    page: 1 as number
}
export type InitialUsersStateType = typeof initialState

enum Actions {
    SET_USERS = "SET-USERS",
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_PAGE = "SET-PAGE",
    SET_TOTAL = "SET-TOTAL"
}

export const usersReducer = (state: InitialUsersStateType = initialState, action: ActionsType): InitialUsersStateType => {
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
        default:
            return state
    }
}

type ActionsType = setUserACType | followACType | unfollowACType | setPageACType | setTotalACType


export type setUserACType = ReturnType<typeof setUsersAC>
export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setPageACType = ReturnType<typeof setPageAC>
export type setTotalACType = ReturnType<typeof setTotalAC>

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
export const setPageAC = (page: number) => {
    return {
        type: Actions.SET_PAGE,
        page
    } as const
}
export const setTotalAC = (total:number ) => {
    return {
        type: Actions.SET_TOTAL,
        total
    } as const
}