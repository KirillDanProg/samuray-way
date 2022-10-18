import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppType, RootState} from "../../redux/store";
import {AnyAction} from "redux";
import {authMeTC} from "../../redux/authReducer/authReducer";
import {ThunkDispatch} from "redux-thunk";

export type HeaderPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.authMe()
    }
    componentDidUpdate(prevProps: Readonly<HeaderPropsType>, prevState: Readonly<{}>) {
        if(prevProps.authData.isLogin !== this.props.authData.isLogin) {
            this.props.authMe()
        }
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
const mapDispatchToProps = (dispatch: ThunkDispatch<AppType, void, AnyAction>) => {
    return {
        authMe: () => {
            dispatch(authMeTC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
