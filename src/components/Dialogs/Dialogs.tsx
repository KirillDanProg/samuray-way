import React, {FC} from "react";
import styles from "./Dialogs.module.css"
import { DialogItem } from "./DialogItem/DialogItem";
import {DialogMessage} from "./Message/DialogMessage";
import {DialogsPropsType} from "../../types /types";



export const Dialogs: FC<DialogsPropsType> = ({dialogs, ...props}) => {

    const dialogElements = dialogs.dialogsData.map((dialog, i) => (
        <DialogItem key={i} name={dialog.name} img={dialog.img} id={dialog.id}/>
    ))
    const messageElements = dialogs.messagesData.map((message, i) =>  (
        <DialogMessage key={i} message={message.message} id={message.id} img={message.img}/>
    ))
    const updateMessageText = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.updateMessageText(e.currentTarget.value)
    }

    const addMessageHandler = () => {
        props.addMessage()
    }
    return (
        <div className={styles.dialogsContainer}>
            <div className={styles.colDialogs}>
                {dialogElements}
            </div>
            <div className={styles.colMessages}>
                {messageElements}
                <input onChange={updateMessageText} value={dialogs.messageText} />
                <button onClick={addMessageHandler}>send</button>
            </div>
        </div>
    )
}


