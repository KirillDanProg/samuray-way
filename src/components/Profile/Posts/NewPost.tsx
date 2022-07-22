import React from "react";
import styles from "./Posts.module.css"

export const NewPost = () => {
    return (
        <form className={styles.form}>
           <input className={styles.input}/>
            <button>Add Post</button>
        </form>
    )
}