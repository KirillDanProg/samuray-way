import React, {FC} from "react";
import styles from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo";

import {Posts} from "./Posts/Posts";
import {ProfilePropsType} from "../../types /ProfileType/ProfileTypes";




export const Profile: FC<ProfilePropsType> = (props) => {
    const {profile, dispatch} = props
    return (
        <div className={styles.profile}>
            <ProfileInfo profileData={profile.profileData}/>
            <Posts profile={profile}
                   dispatch={dispatch}
            />
        </div>
    )
}

