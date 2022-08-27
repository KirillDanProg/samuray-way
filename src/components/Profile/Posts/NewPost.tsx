import React, {FC} from "react";
import styles from "./Posts.module.css"
import {NewPostType} from "../../../types /ProfileType/ProfileTypes";
import {addPostAC, updatePostTextAC} from "../../../redux/profile-reducer";


export const NewPost: FC<NewPostType> = (props) => {

    const [error, setError] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState("")

    const addPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(!props.postText.trim()) {
            setError(true)
            setErrorMessage("field is required")
        }
        e.preventDefault()
        props.dispatch(addPostAC())
    }

    const updatePostTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setErrorMessage("")
        props.dispatch(updatePostTextAC(e.currentTarget.value))
    }

    return (
        <form className={styles.form}>
            <input value={props.postText} onChange={updatePostTextHandler}
                   className={`${styles.input} ${error ? styles.error : ""}`}/>
            <div className={styles.errorMessage}>{error && errorMessage}</div>
            <button onClick={addPost}>Add Post</button>
        </form>
    )
}