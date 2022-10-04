import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {Dispatch} from "redux";
import {
    followAC,
    InitialUsersStateType,
    setPageAC, setTotalAC,
    setUsersAC,
    unfollowAC,
    User
} from "../../redux/usersReducer/users-reducer";
import axios from "axios";
import {Users} from "./UsersF";

export type UsersPropsType = MapStateType & MapDispatchType

type MapStateType = {
    users: InitialUsersStateType
}
type MapDispatchType = {
    setUsers: (user: User[]) => void
    follow: (id: string) => void
    unfollow: (id: string) => void
    changePage: (page: number) => void
    setTotal: (total: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.users.page}&count=${this.props.users.count}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotal(response.data.totalCount)
        })
    }

    render() {
        return (
            <Users props={this.props}/>
        )
    }
}

const mapStateToProps = (state: RootState): MapStateType => {
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
        },
        changePage: (page: number) => {
            dispatch(setPageAC(page))
        },
        setTotal: (total: number) => {
            dispatch(setTotalAC(total))
        }
    }
}
    export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

