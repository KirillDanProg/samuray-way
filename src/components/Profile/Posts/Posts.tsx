import React, {FC} from "react";
import {NewPost} from "./NewPost";
import {Post} from "./Post";
import {PostDataType} from "../../../types /types";

type PostsPropsType = {
    postsData: Array<PostDataType>
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

