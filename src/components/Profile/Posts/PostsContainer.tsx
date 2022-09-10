import React from "react";
import {AppType} from "../../../redux/store";
import {NewPost} from "./NewPost";
import {addPostAC, deletePostAC, updatePostTextAC} from "../../../redux/profile-reducer";
import {Post} from "./Post";
import {PostDataType} from "../../../types /ProfileType/ProfileTypes";


export const PostsContainer = (props: AppType) => {
    const addPostHandler = () => {
        props.store.dispatch(addPostAC())
    }

    const updatePostTextHandler = (postText: string) => {
        props.store.dispatch(updatePostTextAC(postText))
    }

    const deletePostHandler = (id: string) => {
        props.store.dispatch(deletePostAC(id))
    }


    return (
        <div>
            <NewPost error={props.store.getState().profile.error}
                     errorMessage={props.store.getState().profile.errorMessage}
                     postText={props.store.getState().profile.postText}
                     addPost={addPostHandler}
                     updatePostText={updatePostTextHandler}
            />
            {props.store.getState().profile.postsData.map((post: PostDataType) => (
                <Post img={post.img}
                      key={post.id}
                      id={post.id}
                      likes={post.likes}
                      deletePost={deletePostHandler}
                      postText={post.postText}/>
            ))}
        </div>
    )
}

