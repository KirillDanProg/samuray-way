import React from "react";
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";



export const DialogsContainer = (props: any) => {



    const updateMessageText = (newMessage: string) => {
        props.store.dispatch(updateMessageTextAC(newMessage))
    }

    const addMessageHandler = () => {
        props.store.dispatch(addMessageAC())
    }

    return (
        <Dialogs dialogs={props.store.getState().dialogs}
                 addMessage={addMessageHandler}
                 updateMessageText={updateMessageText}
        />
    )
}


