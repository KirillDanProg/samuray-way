import React, {FC} from "react";
import styles from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo";

import {Posts} from "./Posts/Posts";
import {ProfilePropsType} from "../../types /ProfileType/ProfileTypes";




export const Profile: FC<ProfilePropsType> = ({profile, addPost, updatePostText, deletePost}) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo profileData={profile.profileData}/>
            <Posts profile={profile}
                   updatePostText={updatePostText}
                   addPost={addPost}
                   deletePost={deletePost}
            />
        </div>
    )
}

