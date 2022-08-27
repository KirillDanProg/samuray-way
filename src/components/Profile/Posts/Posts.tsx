import React, {FC} from "react";
import {NewPost} from "./NewPost";
import {Post} from "./Post";
import {ProfilePropsType} from "../../../types /ProfileType/ProfileTypes";


export const Posts: FC<ProfilePropsType> = ({profile, ...props}) => {
    return (
        <div>
            <NewPost error={profile.error}
                     errorMessage={profile.errorMessage}
                     dispatch={props.dispatch}
                     postText={profile.postText}
                     />
            {profile.postsData.map((post, i) => (
                <Post img={post.img}
                      key={i}
                      id={post.id}
                      likes={post.likes}
                      dispatch={props.dispatch}
                      postText={post.postText}/>
            ))}
        </div>
    )
}

