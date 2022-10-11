import React, {FC} from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppType} from "../redux/store";

export const WithAuthRedirect = (Component: FC<any> | any) => {

   const RedirectComponent = (props: any) => {
       if(!props.isAuth) return <Navigate to={"/login"}/>
       return <Component {...props}/>
   }
   const mapStateToProps = (state: AppType) =>{
       return {
           isAuth: state.auth.login
       }
   }
   return connect(mapStateToProps)(RedirectComponent)
};

