import React from "react";
import styles from "./Header.module.css"
import ThemeToggle from "./ThemeToggle";

export const Header = () => {
    const [darkMode, setDarkMode] = React.useState(false)

    const darkModeHandler = (darkMode: boolean) => {
        setDarkMode(darkMode)
    }
    return (
        <div className={styles.header}>
            <Logo/>
            <ThemeToggle darkMode={darkMode} setDarkMode={darkModeHandler}/>
        </div>
    )
}
const Logo = () => {
    return (
        <span className={styles.logo}>VN</span>
    )
}