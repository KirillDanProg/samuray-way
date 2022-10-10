import React from "react";
import {connect} from "react-redux";
import {ProfileDataType} from "../../types /ProfileType/ProfileTypes";
import {AppType} from "../../redux/store";
import {ProfileInfo} from "./ProfileInfo";
import {getProfileDataTC} from "../../redux/profileReducer/profile-reducer";
import {AnyAction} from "redux";
import {useParams} from "react-router-dom";
import {ThunkDispatch} from "redux-thunk";

type ParamsType = {
    userId: number
}

export type ProfileInfoContainerPropsType = MapStatePropsType & MapDispatchType & {
    router: {
        params: ParamsType
    }
}

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let params = useParams();
        return (
            <Component
                {...props}
                router={{params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


class ProfileInfoContainer extends React.Component<ProfileInfoContainerPropsType> {
    componentDidMount() {
        const id = Number(this.props.router.params.userId)
        const defaultID = this.props.authID
        this.props.getProfileData(id ? id : defaultID)
    }

    componentDidUpdate(prevProps: Readonly<ProfileInfoContainerPropsType>) {
        if(prevProps.authID !== this.props.authID) {
            const defaultID = this.props.authID
            this.props.getProfileData(defaultID)
        }
    }

    render() {
        return (
            <ProfileInfo profileData={this.props.profileData}/>
        )
    }
}


type MapStatePropsType = {
    profileData: ProfileDataType,
    authID: number
}

const mapStateToProps = (state: AppType): MapStatePropsType => {
    return {
        profileData: state.profile.profileData,
        authID: state.auth.id
    }
}
type MapDispatchType = {
    getProfileData: (userId: number) => void
}
const mapDispatchToProps = (dispatch: ThunkDispatch<AppType, void, AnyAction>) => {
    return {
        getProfileData: (userId: number) => {
            dispatch(getProfileDataTC(userId))
        }
    }
}

const ProfileContainerUrl = withRouter(ProfileInfoContainer)
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerUrl)




