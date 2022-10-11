import React from "react";
import {connect} from "react-redux";
import {AppType, RootState} from "../../redux/store";
import {AnyAction} from "redux";
import {
    followTC, getUsersTC,
    InitialUsersStateType,
    setPageAC, setTotalAC,
    unfollowTC,
} from "../../redux/usersReducer/users-reducer";
import {Users} from "./UsersF";
import {ThunkDispatch} from "redux-thunk";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

export type UsersPropsType = MapStateType & MapDispatchType

type MapStateType = {
    users: InitialUsersStateType
}
type MapDispatchType = {
    getUsers: (page: number, count: number) => void
    follow: (id: string) => void
    unfollow: (id: string) => void
    changePage: (page: number) => void
    setTotal: (total: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        const page = this.props.users.page
        const count = this.props.users.count
        this.props.getUsers(page, count)

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
const mapDispatchToProps = (dispatch: ThunkDispatch<AppType, void, AnyAction>): MapDispatchType => {
    return {
        getUsers: (page: number, count: number) => {
            dispatch(getUsersTC(page, count))
        },
        follow: (id: string) => {
            dispatch(followTC(id));
        },
        unfollow: (id: string) => {
            dispatch(unfollowTC(id))
        },
        changePage: (page: number) => {
            dispatch(setPageAC(page))
        },
        setTotal: (total: number) => {
            dispatch(setTotalAC(total))
        },
    }
}
const UsersWithAuthRedirect = WithAuthRedirect(UsersContainer)
export default connect(mapStateToProps, mapDispatchToProps)(UsersWithAuthRedirect)

