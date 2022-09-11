import React from "react";
import styles from "./Profile.module.css"
import {ProfileInfoContainerPropsType} from "./ProfileInfoContainer";


export const ProfileInfo = (props: ProfileInfoContainerPropsType) => {
    const {profileData} = props
    return (
        <div className={styles.profileInfo}>
            <img className={styles.avatar} src={"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}/>
            <div>
                <div>Name: {profileData.name}</div>
                <div>Country: {profileData.country}</div>
                <div>Date of birth: {profileData.dateOfBirth}</div>
            </div>
        </div>
    )
}
