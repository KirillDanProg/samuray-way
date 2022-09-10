import React from "react";
import styles from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo";

import {PostsContainer} from "./Posts/PostsContainer";
import {AppType} from "../../redux/store";



export const Profile = (props: AppType) => {

    return (
        <div className={styles.profile}>
            <ProfileInfo profileData={props.store.getState().profile.profileData}/>
            <PostsContainer store={props.store}/>
        </div>
    )
}

