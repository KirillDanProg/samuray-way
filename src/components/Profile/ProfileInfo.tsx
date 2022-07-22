import React from "react";
import styles from "./Profile.module.css"

export const ProfileInfo = () => {
    return (
        <div className={styles.profileInfo}>
            <img className={styles.avatar} src={"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}/>
            <div>
                <div>Name: Kirill</div>
                <div>Country: Russia</div>
                <div>Date of birth: 28 сентября</div>
            </div>
        </div>
    )
}