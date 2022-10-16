import React, {FC} from "react";
import styles from "./Profile.module.css"
import {ProfileDataType} from "../../types /ProfileType/ProfileTypes";
import EditableSpan from "../../common/superComponents/EditableSpan";


type ProfileInfoType = {
    profileData: ProfileDataType
    changeStatus: (status: string) => void
}
export const ProfileInfo: FC<ProfileInfoType> = (props) => {
    const changeStatusHandler = (status: string) => {
        props.changeStatus(status)
    }
    if (props.profileData.userId) {

        const {profileData} = props
        const photo = profileData.photos.small

        return (
            <div className={styles.profileInfo}>
                <img className={styles.avatar}
                     src={photo ? photo : "https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png"}/>
                <div>
                    <div className={styles.name}>{profileData.fullName}</div>

                    <UserStatus value={profileData.status} callback={changeStatusHandler}/>

                </div>
            </div>
        )
    } else {
        return <div>Something went wrong</div>
    }

}
type UserStatusType = {
    value: string | undefined
    callback: (value: string) => void
}
export const UserStatus: FC<UserStatusType> = (props) => {
    return (
        <div>
            <EditableSpan value={props.value} callback={props.callback}/>
        </div>
    )
}