import React from "react";
import styles from "./Main.module.css"
import {Profile} from "./Profile/Profile";

export const Main = () => {
    return (
        <div className={styles.main}>
            <Profile/>
        </div>
    )
}
