import React, { useEffect} from "react";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import {User} from "./User";
import {UsersPagination} from "./UsersPagination";

export const Users = (props: UsersPropsType) => {
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.users.page}&count=${props.users.count}`)
            .then(response => {
                props.setUsers(response.data.items)
            })
    }, [props.users.page, props.setUsers, props.users.count])

    const followHandler = (id: string) => {
        props.follow(id)
    }
    const unfollowHandler = (id: string) => {
        props.unfollow(id)
    }


    return (
        <div className={styles.box}>
            <UsersPagination page={props.users.page}
                             count={props.users.count}
                             total={props.users.total}
                             changePage={props.changePage}/>
            {props.users.users.map(u => {
                return (
                    <User key={u.id}
                          id={u.id}
                          name={u.name}
                          follow={followHandler}
                          unfollow={unfollowHandler}
                          followed={u.followed}
                          photos={u.photo}
                          status={u.status}
                    />
                )
            })}
        </div>
    )
}



