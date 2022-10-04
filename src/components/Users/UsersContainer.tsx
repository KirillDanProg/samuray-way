import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {Dispatch} from "redux";
import {
    followAC,
    InitialUsersStateType, setDisableAC,
    setPageAC, setTotalAC,
    setUsersAC,
    unfollowAC,
    User
} from "../../redux/usersReducer/users-reducer";
import {Users} from "./UsersF";
import {userAPI} from "../../api/api";

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
    setDisable: (id: string | null) => void

}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        const page = this.props.users.page
        const count = this.props.users.count
      userAPI.getUsers(page, count).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotal(data.totalCount)
        })
    }

    render() {
        return (
            <Users {...this.props}/>
        )
    }
}

const mapStateToProps = (state: RootState): MapStateType => {
    return {
        users: state.users,
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
        },
        setDisable: (id: string | null) => {
            dispatch(setDisableAC(id))
        }
    }
}
    export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

