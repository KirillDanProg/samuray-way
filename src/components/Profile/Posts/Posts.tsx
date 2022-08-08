import React, {FC} from "react";
import {NewPost} from "./NewPost";
import {Post} from "./Post";
import {PostsPropsType} from "../../../types /types";


export const Posts: FC<PostsPropsType> = (props) => {
    return (
        <div>
            <NewPost postText={props.postText} addPost={props.addPost}  updatePostText={props.updatePostText}/>
            {props.postsData.map((post, i) => (
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

