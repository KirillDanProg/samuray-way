import React, {FC} from "react";
import {NewPost} from "./NewPost";
import {Post} from "./Post";
import {ProfileDataType} from "../Profile";

type PostsPropsType = {
    postsData: Array<ProfileDataType>
}
export const Posts: FC<PostsPropsType> = (props) => {
    return (
        <div>
            <NewPost/>
            {props.postsData.map((post, i) => (
                <Post img={post.img}
                      key={i} id={post.id}
                      likes={post.likes}
                      postText={post.postText}/>
            ))}
        </div>
    )
}

