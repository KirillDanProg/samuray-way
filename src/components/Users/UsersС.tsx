import React from "react"
import {UsersPropsType} from "./UsersContainer";
import {User} from "./Users";
import axios from "axios";


export class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {this.props.users.users.map(u => {
                    return (
                        <User key={u.id}
                              id={u.id}
                              name={u.name}
                              follow={this.props.follow}
                              unfollow={this.props.unfollow}
                              followed={u.followed}
                              photo={u.photo}
                              status={u.status}
                        />
                    )
                })}
            </div>
        )
    }


}
