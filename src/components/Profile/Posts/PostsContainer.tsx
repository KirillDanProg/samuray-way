import React from "react";
import {NewPost} from "./NewPost";
import {addPostAC, deletePostAC, updatePostTextAC} from "../../../redux/profile-reducer";
import {Post} from "./Post";
import {PostDataType, ProfileType} from "../../../types /ProfileType/ProfileTypes";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppType} from "../../../redux/store";



const Posts = (props: AppType) => {
    return (
        <div>
            <NewPost error={props.error}
                     errorMessage={props.errorMessage}
                     postText={props.postText}
                     addPost={props.addPostHandler}
                     updatePostText={props.updatePostTextHandler}
            />
            {props.profile.postsData.map((post: PostDataType) => (
                <Post img={post.img}
                      key={post.id}
                      id={post.id}
                      likes={post.likes}
                      deletePost={props.deletePostHandler}
                      postText={post.postText}/>
            ))}
        </div>
    )
}

const mapStateToProps = (state: AppType) => {
    return {
        profile: state.profile
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updatePostText: (id: string) => {
            dispatch(updatePostTextAC(id))
        },
        deletePostHandler: (id: string) => {
           dispatch(deletePostAC(id))
        }
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
