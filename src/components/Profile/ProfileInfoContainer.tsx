import React from "react";
import {connect} from "react-redux";
import {ProfileDataType} from "../../types /ProfileType/ProfileTypes";
import {AppType} from "../../redux/store";
import {ProfileInfo} from "./ProfileInfo";
import {changeUserStatusTC, getProfileDataTC, getUserStatusTC} from "../../redux/profileReducer/profile-reducer";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {withRouter} from "../../hoc/withRouter";

type ParamsType = {
    userId: number
}

export type ProfileInfoContainerPropsType = MapStatePropsType & MapDispatchType & {
    router: {
        params: ParamsType
    }
}

class ProfileInfoContainer extends React.Component<ProfileInfoContainerPropsType> {
    initData = () => {
        const defaultID = this.props.authID
        const id = Number(this.props.router.params.userId)
        this.props.getProfileData(id ? id : defaultID)
        this.props.getUserStatus(id ? id : defaultID)
    }

    componentDidMount() {
        this.initData()
    }

    componentDidUpdate(prevProps: Readonly<ProfileInfoContainerPropsType>) {
        if (prevProps.authID !== this.props.authID) {
            this.initData()
        }
        if (prevProps.profileData.status !== this.props.profileData.status) {
            this.changeUserStatus(this.props.profileData.status)
        }
    }

    changeUserStatus = (status: string | undefined) => {
        this.props.updateUserStatus(status)
    }

    render() {
        return (
            <ProfileInfo profileData={this.props.profileData} changeStatus={this.changeUserStatus}/>
        )
    }
}


type MapStatePropsType = {
    profileData: ProfileDataType,
    authID: number
}
type MapDispatchType = {
    getProfileData: (userId: number) => void
    updateUserStatus: (status: string | undefined) => void
    getUserStatus: (id: number) => void
}


const mapStateToProps = (state: AppType): MapStatePropsType => {
    return {
        profileData: state.profile.profileData,
        authID: state.auth.id,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppType, void, AnyAction>): MapDispatchType => {
    return {
        getProfileData: (userId: number) => {
            dispatch(getProfileDataTC(userId))
        },
        updateUserStatus: (status: string | undefined) => {
            dispatch(changeUserStatusTC(status))
        },
        getUserStatus: (id: number) => {

            dispatch(getUserStatusTC(id))
        }
    }
}

const ProfileContainerUrl = withRouter(ProfileInfoContainer)
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerUrl)




