import React, {useEffect} from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import {User} from "./User";
import {UsersPagination} from "./UsersPagination";
import {userAPI} from "../../api/api";

type UsersPropsTypeTest = {
    props: UsersPropsType
}

export const Users = (props: UsersPropsTypeTest) => {
    const {setUsers, users, changePage, follow, unfollow, setDisable} = props.props
    useEffect(() => {
        userAPI.getUsers(users.page, users.count)
            .then(data => {
                setUsers(data.items)
            })
    }, [users.page, users.count, setUsers])

    const followHandler = (id: string) => {
        setDisable(true)
        userAPI.follow(id).then(data => {
            if (data.resultCode === 0) {
                follow(id)
                setDisable(false)
            }
        })

    }
    const unfollowHandler = (id: string) => {
        setDisable(true)
        userAPI.unfollow(id).then(data => {
            if (data.resultCode === 0) {
                unfollow(id)
                setDisable(false)
            }
        })
    }


    return (
        <div className={styles.box}>
            <UsersPagination page={users.page}
                             count={users.count}
                             total={users.total}
                             changePage={changePage}/>
            {users.users.map(u => {
                return (
                    <User key={u.id}
                          id={u.id}
                          name={u.name}
                          follow={followHandler}
                          unfollow={unfollowHandler}
                          followed={u.followed}
                          photos={u.photo}
                          status={u.status}
                          disabled={users.disabled}
                    />
                )
            })}
        </div>
    )
}



