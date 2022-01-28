
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {commentsService} from "../../services/comments.service";

const PostMapDetailsPage = () => {
    const {id} = useParams();
    const [comment, setComment] = useState(null);
    useEffect(()=>{
        commentsService.getById(id).then(value => setComment({...value}))
    }, [])
    return (
        <div>
            {comment && (
                <div>
                    <div>ID: {comment.id}</div>
                    <div>PostID: {comment.postId}</div>
                    <div>Name: {comment.name}</div>
                    <div>email: {comment.email}</div>
                    <div>Body: {comment.body}</div>
                </div>
            )}
        </div>

    );
};

export default PostMapDetailsPage
