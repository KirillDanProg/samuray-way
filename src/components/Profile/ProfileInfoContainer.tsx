import React from "react";
import {connect} from "react-redux";
import {ProfileDataType} from "../../types /ProfileType/ProfileTypes";
import {AppType} from "../../redux/store";
import {ProfileInfo} from "./ProfileInfo";
import axios from "axios";
import {setProfileDataAC} from "../../redux/profileReducer/profile-reducer";
import {Dispatch} from "redux";
import {
    useParams
} from "react-router-dom";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.router.params.userId}`)
            .then(res => {
                this.props.setProfileData(setProfileDataAC(res.data))
            })
    }

    render() {
        return (
            <ProfileInfo profileData={this.props.profileData}/>
        )
    }
}


type MapStatePropsType = {
    profileData: any
}

const mapStateToProps = (state: AppType): MapStatePropsType => {
    return {
        profileData: state.profile.profileData,
    }
}
type MapDispatchType = {
    setProfileData: (data: ProfileDataType) => void
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setProfileData: (data: ProfileDataType) => {
            dispatch(setProfileDataAC(data))
        }
    }
}

const ProfileContainerUrl = withRouter(ProfileInfoContainer)
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerUrl)




