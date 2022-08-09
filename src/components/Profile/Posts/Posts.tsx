import React, {FC} from "react";
import {NewPost} from "./NewPost";
import {Post} from "./Post";
import {ProfilePropsType} from "../../../types /ProfileType/ProfileTypes";


export const Posts: FC<ProfilePropsType> = ({profile, ...props}) => {
    return (
        <div>
            <NewPost error={profile.error}
                     errorMessage={profile.errorMessage}
                     postText={profile.postText}
                     addPost={props.addPost}
                     updatePostText={props.updatePostText}/>
            {profile.postsData.map((post, i) => (
                <Post img={post.img}
                      key={i}
                      id={post.id}
                      likes={post.likes}
                      deletePost={props.deletePost}
                      postText={post.postText}/>
            ))}
        </div>
    )
}

