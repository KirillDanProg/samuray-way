import React from "react";
import styles from "./Profile.module.css"
import {connect} from "react-redux";


export const ProfileInfo = (props: any) => {
    return (
        <div className={styles.profileInfo}>
            <img className={styles.avatar} src={"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}/>
            <div>
                <div>Name: {props.profileData.name}</div>
                <div>Country: {props.profileData.country}</div>
                <div>Date of birth: {props.profileData.dateOfBirth}</div>
            </div>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        profileData: state
    }
}
const mapDispatchToProps = () => {
    return {

    }
}

export const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)