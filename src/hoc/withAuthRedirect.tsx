import React, { ElementType} from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppType} from "../redux/store";

export function WithAuthRedirect (Component: ElementType<any>) {

   const RedirectComponent= (props: any) => {
       const [isAuth, restProps] = props

       if(isAuth) return <Navigate to={"/login"}/>

       return <Component {...restProps}/>
   }

   type MapStateToPropsType = {
       isAuth: boolean
   }
   const mapStateToProps = (state: AppType): MapStateToPropsType =>{
       return {
           isAuth: state.auth.login
       }
   }
   const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

   return ConnectedRedirectComponent
};

