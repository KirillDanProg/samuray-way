import React from "react";
import styles from "./Sidebar.module.css"

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.list}>
                <li className={styles.item}>Profile</li>
                <li className={styles.item}>Messages</li>
                <li className={styles.item}>Users</li>
            </ul>
        </div>
    )
}