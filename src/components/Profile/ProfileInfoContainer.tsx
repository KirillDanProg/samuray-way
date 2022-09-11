import React from "react";
import {connect} from "react-redux";
import {ProfileDataType} from "../../types /ProfileType/ProfileTypes";
import {AppType} from "../../redux/store";
import {ProfileInfo} from "./ProfileInfo";

export type ProfileInfoContainerPropsType = MapStatePropsType

type MapStatePropsType = {
    profileData: ProfileDataType

}
const mapStateToProps = (state: AppType): MapStatePropsType => {
    return {
        profileData: state.profile.profileData,
    }
}


export const ProfileInfoContainer = connect(mapStateToProps, )(ProfileInfo)