import React, {FC} from "react";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    id: string
    name: string
    photos: { small: string, large: string }
    followed: boolean
    status?: string
    follow: (id: string) => void
    unfollow: (id: string) => void
    disabled: string | null
}

export const User: FC<UserPropsType> = (props) => {
    const disabled = props.disabled === props.id
    const followHandler = () => {
        props.follow(props.id)
    }
    const unfollowHandler = () => {
        props.unfollow(props.id)
    }
    return (
        <div className={styles.userBox}>
            <NavLink to={`/profile/${props.id}`}>
                <img style={{width: "80px", borderRadius: "50%"}}
                     src={props.photos.small ? props.photos.small : "https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png"}/>
            </NavLink>
            <div>{props.name}</div>
            <div>{props.status}</div>
            <button
                disabled={disabled}
                className={disabled ? styles.disabled : ""}
                onClick={props.followed ? unfollowHandler : followHandler}>
                {props.followed ? "Unfollow" : "Follow"}
            </button>
        </div>
    )
}