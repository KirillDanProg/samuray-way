import {v1} from "uuid";
import {followACType, setUserACType, unfollowACType, User, usersReducer} from "./users-reducer";


test("users should be uploaded", () => {
    const initialState = {
        users: [] as User[],
        error: "" as string,
        totalCount: 5 as number
    }
    const users = [
        {id: v1(), userName: "Alex", followed: false},
        {id: v1(), userName: "Kirill", followed: false}
    ]
    const action: setUserACType = {
        type: "SET-USERS",
        payload: {
            users: users
        }
    }

    const name = "Alex"

    const newState = usersReducer(initialState, action)

    expect(newState.users.length).toBe(2)
    expect(newState.users[0].userName).toBe(name)
})

test("user followed should be true", () => {
    const initialState = {
        users: [
            {id: v1(), userName: "Alex", followed: false},
            {id: v1(), userName: "Kirill", followed: false}
        ] as User[],
        error: "" as string,
        totalCount: 5 as number
    }

    const action: followACType= {
        type: "FOLLOW",
        payload: {
            id: initialState.users[0].id
        }
    }

    const newState = usersReducer(initialState, action)

    expect(newState.users[0].followed).toBe(true)
})

test("user followed should be false", () => {
    const initialState = {
        users: [
            {id: v1(), userName: "Alex", followed: false},
            {id: v1(), userName: "Kirill", followed: true}
        ] as User[],
        error: "" as string,
        totalCount: 5 as number
    }
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