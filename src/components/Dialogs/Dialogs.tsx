import React, {FC} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./Message/DialogMessage";
import {DialogType, MessageDataType} from "../../types /DialogsType/DialogsTypes";


export type DialogsPropsType = {
    dialogs: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageDataType>
        messageText: string
    }
    addMessage: () => void
    updateMessageText: (message: string) => void
}
export const Dialogs: FC<DialogsPropsType> = (props) => {
    const dialogElements = props.dialogs.dialogsData.map((dialog) => (
        <DialogItem key={dialog.id} name={dialog.name} img={dialog.img} id={dialog.id}/>
    ))

    const messageElements = props.dialogs.messagesData.map((message) => (
        <DialogMessage key={message.id} message={message.message} id={message.id} img={message.img}/>
    ))

    const updateMessageTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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

                <input onChange={updateMessageTextHandler} value={props.dialogs.messageText} className={styles.input}/>
                <button onClick={addMessageHandler}>send</button>

            </div>
        </div>
    )
}


