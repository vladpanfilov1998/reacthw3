import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {commentsService} from "../../services/comments.service";

const UserComments = () => {
    const {id} = useParams();
    const [comments, setComments] = useState(null);
    useEffect(()=>{
        commentsService.getById(id).then(value => setComments({...value}))
    }, [])
    return (
        <div>
            {comments && (
                <div>
                    <div>PostID: {comments.postId}</div>
                    <div>ID: {comments.id}</div>
                    <div>NAME: {comments.name}</div>
                    <div>e-mail: {comments.email}</div>
                    <div>Body: {comments.body}</div>
                </div>
            )}
        </div>

    );
};

export default UserComments;