import React from "react";
import styles from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo";

import img from "../../assets/images.jpeg"
import img2 from "../../assets/rick.jpeg"
import img3 from "../../assets/monkey.jpeg"

import {Posts} from "./Posts/Posts";

const profileData = {
    name: "Kirill",
    country: "Russia",
    dateOfBirth: "28.09.1998"
}
export type profileDataType = {
    name: string
    country: string
    dateOfBirth: string
}

export type ProfileDataType = {
    id: number
    postText: string
    likes: number
    img: string
}

const postsData: Array<ProfileDataType> = [
    {id: 1, postText: "Hello world!", likes: 237, img: img},
    {id: 2, postText: "Bla Bla Bla", likes: 158, img: img2},
    {id: 3, postText: "Looking for a job", likes: 496, img: img3},
]

export const Profile = () => {
    return (
        <div className={styles.profile}>
            <ProfileInfo profileData={profileData}/>
            <Posts postsData={postsData}/>
        </div>
    )
}

