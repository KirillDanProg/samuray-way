import React from "react";
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

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
const DialogsWithAuthRedirect = WithAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithAuthRedirect)
