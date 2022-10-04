import {followACType, InitialUsersStateType, setUserACType, unfollowACType, usersReducer} from "./users-reducer";

let initialState: InitialUsersStateType

beforeEach(() => {
    initialState = {
        users: []
        ,
        error: "",
        total: 100,
        count: 10,
        page: 1,
        disabled: false
    }
})

test("users should be uploaded", () => {

    const action: setUserACType = {
        type: "SET-USERS",
        payload: {
            users: initialState.users
        }
    }

    const name = "Alex"

    const newState = usersReducer(initialState, action)

    expect(newState.users.length).toBe(2)
    expect(newState.users[0].name).toBe(name)
})

test("user followed should be true", () => {
    const action: followACType = {
        type: "FOLLOW",
        payload: {
            id: initialState.users[0].id
        }
    }

    const newState = usersReducer(initialState, action)

    expect(newState.users[0].followed).toBe(true)
})

test("user followed should be false", () => {

    const action: unfollowACType = {
        type: "UNFOLLOW",
        payload: {
            id: initialState.users[1].id
        }
    }
    const newState = usersReducer(initialState, action)

    expect(newState.users[1].followed).toBe(false)
})


export {}