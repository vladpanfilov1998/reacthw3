import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {commentsService} from "../../services/comments.service";
import css from "../../App.module.css";

const PostCommentsPage = () => {
    const {id} = useParams();
    const [comment, setComment] = useState(null);
      useEffect(()=>{
          commentsService.getById(id).then(value => setComment({...value}))
      }, [])
    return (
        <div>
            {comment && (
                <div>
                    <div>PostID: {comment.postId}</div>
                    <div>ID: {comment.id}</div>
                    <div>NAME: {comment.name}</div>
                    <div>email: {comment.email}</div>
                    <div>Body: {comment.body}</div>
                </div>
            )};
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>

    );
};

export {PostCommentsPage};

