import React, {FC} from "react";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    id: string
    name: string
    photos: string
    followed: boolean
    status?: string
    follow: (id: string) => void
    unfollow: (id: string) => void
}

export const User: FC<UserPropsType> = (props) => {
    return (
        <div className={styles.userBox}>
            <NavLink to={`/profile/${props.id}`}>
                <img style={{width: "80px", borderRadius: "50%"}} src={props.photos ? props.photos : "https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png"}/>
            </NavLink>
            <div>{props.name}</div>
            <div>{props.status}</div>

            <button
                onClick={props.followed ? () => props.unfollow(props.id) : () => props.follow(props.id)}>
                {props.followed ? "Unfollow" : "Follow"}
            </button>
        </div>
    )
}