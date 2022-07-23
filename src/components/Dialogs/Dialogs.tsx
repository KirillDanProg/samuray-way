import React from "react";
import styles from "./Dialogs.module.css"
import img from "../../assets/images.jpeg"
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./Message/DialogMessage";

export const Dialogs = () => {
    return (
        <div className={styles.dialogsContainer}>
            <div className={styles.colDialogs}>
                <DialogItem img={img} name={"Kirill"}/>
                <DialogItem img={img} name={"Alex"}/>
                <DialogItem img={img} name={"Chris"}/>
            </div>
            <div className={styles.colMessages}>
                <DialogMessage message={"Some message text"}/>
                <DialogMessage message={"Hello World"}/>
                <DialogMessage message={"Lorem ipsum"}/>
                <DialogMessage message={"bla bla bla bla bla bla "}/>
                <DialogMessage message={"Some message text"}/>
            </div>
        </div>
    )
}


