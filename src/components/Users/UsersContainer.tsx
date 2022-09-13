import React from "react";
import {connect} from "react-redux";
import {AppType} from "../../redux/store";
import {Dispatch} from "redux";
import {followAC, InitialUsersStateType, setUsersAC, unfollowAC, User} from "../../redux/usersReducer/users-reducer";
import {Users} from "./Users";


export type UsersPropsType = MapStateType & MapDispatchType

type MapStateType = {
    users: InitialUsersStateType
}
type MapDispatchType = {
    setUsers: (user: User[]) => void
    follow: (id: string) => void
    unfollow: (id: string) => void
}

const mapStateToProps = (state: AppType): MapStateType => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        setUsers: (users: User[]) => {
            dispatch(setUsersAC(users))
        },
        follow: (id: string) => {
            dispatch(followAC(id))
        },
        unfollow: (id: string) => {
            dispatch(unfollowAC(id))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)