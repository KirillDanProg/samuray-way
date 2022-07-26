import React, {useEffect} from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import {User} from "./User";
import {Pagination} from "../../common/Pagination";

export const Users = (props: UsersPropsType) => {

    const {getUsers, users, changePage, follow, unfollow} = props

    useEffect(() => {
        getUsers(users.page, users.count)
    }, [users.page, users.count, getUsers, users.total])

    const followHandler = (id: string) => {
        follow(id)
    }
    const unfollowHandler = (id: string) => {
        unfollow(id)
    }


    return (
        <>
            <Pagination page={users.page}
                        count={users.count}
                        total={users.total}
                        changePage={changePage}
            />
            <div className={styles.box}>
                {users.users.map(u => {
                    return (
                        <User key={u.id}
                              id={u.id}
                              name={u.name}
                              follow={followHandler}
                              unfollow={unfollowHandler}
                              followed={u.followed}
                              photos={u.photos}
                              status={u.status}
                              disabled={users.disabled}
                        />
                    )
                })}
            </div>
        </>

    )
}



