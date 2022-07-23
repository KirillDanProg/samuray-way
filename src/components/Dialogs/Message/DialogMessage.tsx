import React, {FC} from "react";
import styles from "./DialogMessage.module.css";
import img from "../../../assets/images.jpeg"

export type DialogsMessagesPropsType = {
    id: number
    message: string
    img: typeof img
}

export const DialogMessage: FC<DialogsMessagesPropsType> = (props) => {
    return (
        <div className={styles.messageContainer}>
            <img src={props.img}/>
            <div className={styles.message}>{props.message}</div>
        </div>
    )
}