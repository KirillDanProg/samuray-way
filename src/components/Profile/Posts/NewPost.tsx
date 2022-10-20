import React, {FC} from "react";
import styles from "./Posts.module.css"
import {SubmitHandler, useForm} from "react-hook-form";

export type NewPostType = {
    addPost: (postText: string) => void
}
export const NewPost: FC<NewPostType> = (props) => {

    const addPost = (postText: string) => {
        props.addPost(postText)
    }
    type Inputs = {
        postText: string,
    };

        const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
        const onSubmit: SubmitHandler<Inputs> = data => addPost(data.postText);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("postText")} />
                {errors.postText && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </>
    )
}

