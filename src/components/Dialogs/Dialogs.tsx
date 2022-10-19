import React, {FC} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./Message/DialogMessage";
import {DialogType, MessageDataType} from "../../types /DialogsType/DialogsTypes";
import DialogsForm from "./Message/DialogsForm";


export type DialogsPropsType = {
    dialogs: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageDataType>
        messageText: string
    }
    addMessage: (message: string) => void
}
export const Dialogs: FC<DialogsPropsType> = (props) => {
    const dialogElements = props.dialogs.dialogsData.map((dialog) => (
        <DialogItem key={dialog.id} name={dialog.name} img={dialog.img} id={dialog.id}/>
    ))

    const messageElements = props.dialogs.messagesData.map((message) => (
        <DialogMessage key={message.id} message={message.message} id={message.id} img={message.img}/>
    ))

    const addMessageHandler = (message: string) => {
        props.addMessage(message)
    }


    return (
        <div className={styles.dialogsContainer}>
            <div className={styles.colDialogs}>
                {dialogElements}
            </div>
            <div className={styles.colMessages}>
                {messageElements}

                <DialogsForm onSubmit={addMessageHandler}/>

            </div>
        </div>
    )
}


