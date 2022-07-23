import React, {FC} from "react";
import styles from "./Posts.module.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas)

type PostPropsType = {
    id: number
    postText: string
    likes: number
    img: string
}

export const Post: FC<PostPropsType> = (props) => {
    return (
        <div className={styles.postContainer}>
            <img className={styles.postImg} src={props.img}/>
            <div className={styles.postText}>{props.postText}</div>
            <span className={styles.postLikes}>
                <FontAwesomeIcon icon="fa-solid fa-thumbs-up"/>
                {props.likes}
            </span>
        </div>
    )
}