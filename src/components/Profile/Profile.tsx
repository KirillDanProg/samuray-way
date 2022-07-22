import React from "react";
import styles from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo";
import {Posts} from "./Posts/Posts";

export const Profile = () => {
    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <Posts/>
        </div>
    )
}

