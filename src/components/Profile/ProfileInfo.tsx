import React, {FC} from "react";
import styles from "./Profile.module.css"


type ProfileInfoType = {
    profileData: any
}
export const ProfileInfo: FC<ProfileInfoType> = (props) => {
    if (props.profileData) {
        const {profileData} = props
        const photo = profileData.photos.small
        return (
            <div className={styles.profileInfo}>
                <img className={styles.avatar}
                     src={photo ? photo : "https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png"}/>
                <div>
                    <div>Name: {profileData.fullName}</div>
                    {/*<div>Country: {profileData.country}</div>*/}
                    {/*<div>Date of birth: {profileData.dateOfBirth}</div>*/}
                </div>
            </div>
        )
    } else {
        return <div>Something went wrong</div>
    }

}
