import React from "react";
import styles from "./Profile.module.css"
import {PostsContainer} from "./Posts/PostsContainer";
import ProfileInfoContainer from "./ProfileInfoContainer";

export const Profile = () => {

    return (
        <div className={styles.profile}>
            <ProfileInfoContainer/>
            <PostsContainer/>
        </div>
    )
}


