import React from "react";
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppType} from "../../redux/store";
import {DialogType, MessageDataType} from "../../types /DialogsType/DialogsTypes";

type MapStateToPropsType = {
    dialogs: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageDataType>
        messageText: string
    }
}
const mapStateToProps = (state: AppType): MapStateToPropsType => {
    return {
        dialogs: state.dialogs
    }
}
type MapDispatchToPropsType = {
    addMessage: () => void
    updateMessageText: (newMessage: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateMessageText: (newMessage: string) => {
            dispatch(updateMessageTextAC(newMessage))
        }
    }
}

// const DialogsWithAuthRedirect = WithAuthRedirect(Dialogs)
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithAuthRedirect)

export  const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs)
