import React, {FC, useEffect} from "react";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import userPh from "../../assets/userPh.jpeg"

export const Users = (props: UsersPropsType) => {

    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }, [])

    const followHandler = (id: string) => {
        props.follow(id)
    }
    const unfollowHandler = (id: string) => {
        props.unfollow(id)
    }


    return (
        <div>
            {props.users.users.map(u => {
                return (
                    <User key={u.id}
                          id={u.id}
                          name={u.name}
                          follow={followHandler}
                          unfollow={unfollowHandler}
                          followed={u.followed}
                          photo={u.photo}
                          status={u.status}
                    />
                )
            })}
        </div>
    )
}

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
        <div key={props.id}>
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