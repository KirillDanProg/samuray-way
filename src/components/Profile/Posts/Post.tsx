import React from "react";
import styles from "./Posts.module.css"
import img from "../../../assets/images.jpeg"

export const Post = () => {
    return (
        <div className={styles.postContainer}>
            <img className={styles.postImg} src={img}/>
            <div className={styles.postText}>Some Text</div>
            <span className={styles.postLikes}>likes: 123</span>
        </div>
    )
}