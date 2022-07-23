import React, {FC} from "react";
import styles from "./DialogMessage.module.css";
import img from "../../../assets/images.jpeg"
type DialogsMessagesPropsType = {
    message: string
}

export const DialogMessage: FC<DialogsMessagesPropsType> = (props) => {
    return (
        <div className={styles.messageContainer}>
            <img src={img}/>
            <div className={styles.message}>{props.message}</div>
        </div>
    )
}