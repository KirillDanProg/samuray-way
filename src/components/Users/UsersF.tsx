import React, {useEffect} from "react";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import {User} from "./User";

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

    const pages: number[] = []
    const totalPages = props.users.total / props.users.count
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }
    return (
        <div className={styles.box}>
            <div className={styles.pagination}>
                {pages.map(p => {
                    const changePageHandler = () => {
                        props.changePage(p)
                    }
                    return (
                        <span key={p}
                              className={`${styles.paginationNumber} ${props.users.page === p ? styles.active : ""}`}
                              onClick={changePageHandler}
                        >
                            {p}
                        </span>)
                })}
            </div>
            {props.users.users.map(u => {
                return (
                    <User key={u.id}
                          id={u.id}
                          name={u.name}
                          follow={followHandler}
                          unfollow={unfollowHandler}
                          followed={u.followed}
                          photos={u.photos.small}
                          status={u.status}
                    />
                )
            })}
        </div>
    )
}

