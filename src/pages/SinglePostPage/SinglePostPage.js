import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/post.service";

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    useEffect(()=>{
        postService.getById(id).then(value => setPost({...value}))
    }, [])
        return (
       <div>
            {post && (
                <div>
                <div>ID: {post.id}</div>
                <div>UserID: {post.userId}</div>
                <div>Title: {post.title}</div>
                <div>Body: {post.body}</div>
                </div>
            )}
       </div>

    );
};

export default SinglePostPage;