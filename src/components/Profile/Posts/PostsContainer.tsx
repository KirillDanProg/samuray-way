import React from "react";
import {NewPost} from "./NewPost";
import {addPostAC, deletePostAC} from "../../../redux/profileReducer/profile-reducer";
import {Post} from "./Post";
import {ProfileType} from "../../../types /ProfileType/ProfileTypes";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppType} from "../../../redux/store";



const Posts = (props: PostsPropsType) => {
    return (
        <div>
            <NewPost addPost={props.addPost}
            />
            {props.profile.postsData.map((post) => (
                <Post img={post.img}
                      key={post.id}
                      id={post.id}
                      likes={post.likes}
                      deletePost={props.deletePost}
                      postText={post.postText}/>
            ))}
        </div>
    )
}

export type PostsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    addPost: (postText: string) => void
    deletePost: (id: string) => void
}

const mapStateToProps = (state: AppType): MapStatePropsType => {
    return {
        profile: state.profile,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (postText: string) => {
            dispatch(addPostAC(postText))
        },
        deletePost: (id: string) => {
           dispatch(deletePostAC(id))
        },
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
