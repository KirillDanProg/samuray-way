import React, {useEffect} from "react";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import {User} from "./User";
import {UsersPagination} from "./UsersPagination";


type UsersPropsTypeTest = {
    props: UsersPropsType
}
export const Users = (props: UsersPropsTypeTest) => {
    const {setUsers, users, changePage, follow, unfollow} = props.props
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${users.page}&count=${users.count}`, {
            withCredentials: true
        })
            .then(response => {
                setUsers(response.data.items)
            })
    }, [users.page, setUsers, users.count])

    const followHandler = (id: string) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': "98c53cec-c5b7-4a19-9abc-502320b1a878"
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    follow(id)
                }
            })

    }
    const unfollowHandler = (id: string) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                'API-KEY': "98c53cec-c5b7-4a19-9abc-502320b1a878"
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    unfollow(id)
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
                    />
                )
            })}
        </div>
    )
}



