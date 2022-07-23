import React, {FC} from "react";
import styles from "./DialogItem.module.css"
import img from "../../../assets/images.jpeg";

export type DialogsPropsType = {
    id: number
    name: string
    img: string
}

export const DialogItem: FC<DialogsPropsType> = (props) => {
    return (
        <div className={styles.dialogsItemContainer}>
            <img className={styles.dialogsImg} src={props.img}/>
            <div>{props.name}</div>
        </div>
    )
}