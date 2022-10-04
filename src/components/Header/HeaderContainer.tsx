import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {Dispatch} from "redux";
import {authMe} from "../../redux/authReducer/authReducer";

export type HeaderPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        })
            .then(response => response.data.data)
            .then(data => {
                this.props.authMeHandler(data.id, data.login, data.email)
            })
    }

    render() {
        return (
         <Header authData={this.props.authData}/>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    return {
      authData: state.auth
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        authMeHandler: (id: number, login: string, email: string) => {
            dispatch(authMe(id, login, email))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
