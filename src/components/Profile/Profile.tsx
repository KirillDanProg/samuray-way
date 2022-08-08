import React, {FC} from "react";
import styles from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo";

import {Posts} from "./Posts/Posts";
import {ProfilePropsType} from "../../types /types";




export const Profile: FC<ProfilePropsType> = ({profile, addPost, updatePostText, deletePost}) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo profileData={profile.profileData}/>
            <Posts postText={profile.postText}
                   updatePostText={updatePostText}
                   addPost={addPost}
                   postsData={profile.postsData}
                   deletePost={deletePost}
            />
        </div>
    )
}

