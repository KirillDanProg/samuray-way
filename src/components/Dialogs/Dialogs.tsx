import React, {FC} from "react";
import styles from "./Dialogs.module.css"
import { DialogItem } from "./DialogItem/DialogItem";
import {DialogMessage} from "./Message/DialogMessage";
import {DialogType, MessageDataType} from "../../types /types";


type DialogsPropsType = {
   dialogs: {
       dialogsData: Array<DialogType>
       messagesData: Array<MessageDataType>
   }
}

export const Dialogs: FC<DialogsPropsType> = ({dialogs}) => {

    const dialogElements = dialogs.dialogsData.map((dialog, i) => (
        <DialogItem key={i} name={dialog.name} img={dialog.img} id={dialog.id}/>
    ))
    const messageElements = dialogs.messagesData.map((message, i) =>  (
        <DialogMessage key={i} message={message.message} id={message.id} img={message.img}/>
    ))

    return (
        <div className={styles.dialogsContainer}>
            <div className={styles.colDialogs}>
                {dialogElements}
            </div>
            <div className={styles.colMessages}>
                {messageElements}
            </div>
        </div>
    )
}


