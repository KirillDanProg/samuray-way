import React, {FC} from "react";
import styles from "./Posts.module.css"

export type NewPostType = {
    addPost: () => void
    updatePostText: (text: string) => void
    postText: string
    error: boolean
    errorMessage: string
}
export const NewPost: FC<NewPostType> = (props) => {


    const addPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(!props.postText.trim()) {
            // props.setError(true)
            // setErrorMessage("field is required")
        }
        e.preventDefault()
        props.addPost()
    }

    const updatePostTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setError(false)
        // setErrorMessage("")
       props.updatePostText(e.currentTarget.value)
    }

    return (
        <>
            <input value={props.postText} onChange={updatePostTextHandler}
                   className={`${styles.input} ${props.error ? styles.error : ""}`}/>
            <div className={styles.errorMessage}>{props.error && props.errorMessage}</div>
            <button onClick={addPost}>Add Post</button>
        </>
    )
}