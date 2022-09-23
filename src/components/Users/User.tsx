import React, {FC} from "react";
import styles from "./Users.module.css";
import userPh from "../../assets/userPh.jpeg";
type UserPropsType = {
    id: string
    name: string
    photo?: string
    followed: boolean
    status?: string
    follow: (id: string) => void
    unfollow: (id: string) => void
}

export const User: FC<UserPropsType> = (props) => {
    return (
        <div className={styles.userBox}>
            <img style={{width: "80px", borderRadius: "50%"}} src={props.photo ? props.photo : userPh}/>
            <div>{props.name}</div>
            <div>{props.status}</div>

            <button
                onClick={props.followed ? () => props.unfollow(props.id) : () => props.follow(props.id)}>
                {props.followed ? "Unfollow" : "Follow"}
            </button>
        </div>
    )
}