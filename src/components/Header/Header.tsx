import React from "react";
import styles from "./Header.module.css"

export const Header = () => {
    return (
        <div className={styles.header}>
            <Logo />
        </div>
    )
}
const Logo = () => {
    return (
        <span className={styles.logo}>VN</span>
    )
}