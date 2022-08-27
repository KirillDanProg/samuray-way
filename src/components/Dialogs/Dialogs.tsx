import React, {FC} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./Message/DialogMessage";
import {DialogsPropsType} from "../../types /DialogsType/DialogsTypes";
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogs-reducer";


export const Dialogs: FC<DialogsPropsType> = (props) => {
    const {dialogs, dispatch} = props

    const dialogElements = dialogs.dialogsData.map((dialog, i) => (
        <DialogItem key={i} name={dialog.name} img={dialog.img} id={dialog.id}/>
    ))

    const messageElements = dialogs.messagesData.map((message, i) => (
        <DialogMessage key={i} message={message.message} id={message.id} img={message.img}/>
    ))

    const updateMessageText = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateMessageTextAC(e.currentTarget.value))
    }

    const addMessageHandler = () => {
        dispatch(addMessageAC())
    }

    return (
        <div className={styles.dialogsContainer}>
            <div className={styles.colDialogs}>
                {dialogElements}
            </div>
            <div className={styles.colMessages}>
                {messageElements}

                <form className={styles.form}>
                    <input onChange={updateMessageText} value={dialogs.messageText} className={styles.input}/>
                    <button onClick={addMessageHandler}>send</button>
                </form>

            </div>
        </div>
    )
}


