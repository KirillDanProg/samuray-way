import React from "react";
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

const mapStateToProps = (state: any) => {
    return {
        dialogs: state.dialogs
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateMessageText: (newMessage: string) => {
            dispatch(updateMessageTextAC(newMessage))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
