import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {commentsService} from "../../services/comments.service";
import css from "../../App.module.css";

const PostCommentsPage = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState(null);
      useEffect(()=>{
          commentsService.getById(postId).then(value => setComments({...value}))
      }, [])
    return (
        <div>
            {comments && (
                <div>
                    <div>PostID: {comments.postId}</div>
                    <div>ID: {comments.id}</div>
                    <div>NAME: {comments.name}</div>
                    <div>email: {comments.email}</div>
                    <div>Body: {comments.body}</div>
                </div>
            )};
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>

    );
};

export {PostCommentsPage};

