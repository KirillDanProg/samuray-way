import React from "react";
import styles from "./Sidebar.module.css"
import {Link, NavLink} from "react-router-dom";

export const Sidebar = () => {
    let activeClassName = styles.acti
    return (
        <div className={styles.sidebar}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink className={({isActive}) => (isActive ? styles.active : undefined)}
                             to="profile">Profile</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={({isActive}) => (isActive ? styles.active : undefined)}
                             to="dialogs">Messages</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={({isActive}) => (isActive ? styles.active : undefined)}
                             to="users">Users</NavLink>
                </li>
            </ul>
        </div>
    )
}