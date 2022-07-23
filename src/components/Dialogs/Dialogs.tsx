import React from "react";
import styles from "./Dialogs.module.css"
import img from "../../assets/images.jpeg"
import img2 from "../../assets/rick.jpeg"
import img3 from "../../assets/monkey.jpeg"
import {DialogItem, DialogsPropsType} from "./DialogItem/DialogItem";
import {DialogMessage, DialogsMessagesPropsType} from "./Message/DialogMessage";

const dialogsData: Array<DialogsPropsType> = [
    {id: 1,name: "Kirill",img: img},
    {id: 2,name: "Alex", img : img2},
    {id: 3, name: "Chris", img: img3}
]
const messagesData: Array<DialogsMessagesPropsType> = [
    {id: 1, message: "Some message text", img: img3},
    {id: 2, message: "Hello World", img: img2},
    {id: 3, message: "Lorem ipsum", img: img},
    {id: 4, message: "bla bla bla bla bla bla",  img: img3},
    {id: 5, message: "Some message text", img: img2},
]

const dialogElements = dialogsData.map((dialog, i) => (
    <DialogItem key={i} name={dialog.name} img={dialog.img} id={dialog.id}/>
))
const messageElements = messagesData.map((message, i) =>  (
    <DialogMessage key={i} message={message.message} id={message.id} img={message.img}/>
))
export const Dialogs = () => {
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


