import React, {FC} from "react";
import styles from "./Posts.module.css"
import {NewPostType} from "../../../types /types";


export const NewPost: FC<NewPostType> = (props) => {
    const addPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        props.addPost()
    }

    const updatePostTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.updatePostText(e.currentTarget.value)
    }

    return (
        <form className={styles.form}>
           <input value={props.postText} onChange={updatePostTextHandler} className={styles.input} />
            <button onClick={addPost}>Add Post</button>
        </form>
    )
}