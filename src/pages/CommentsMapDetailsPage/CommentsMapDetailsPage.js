
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {commentsService} from "../../services/comments.service";

const PostMapDetailsPage = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState(null);
    useEffect(()=>{
        commentsService.getById(postId).then(value => setComments({...value}))
    }, [])
    return (
        <div>
            {comments && (
                <div>
                    <div>ID: {comments.id}</div>
                    <div>PostID: {comments.postId}</div>
                    <div>Name: {comments.name}</div>
                    <div>email: {comments.email}</div>
                    <div>Body: {comments.body}</div>
                </div>
            )}
        </div>

    );
};

export default PostMapDetailsPage
