import React, {FC} from "react";
import styles from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo";

import {Posts} from "./Posts/Posts";
import {PostDataType, ProfileDataType} from "../../types /types";


type ProfilePropsType = {
    profile: {
        profileData: ProfileDataType
        postsData: Array<PostDataType>
    }

}

export const Profile: FC<ProfilePropsType> = ({profile}) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo profileData={profile.profileData}/>
            <Posts postsData={profile.postsData}/>
        </div>
    )
}

