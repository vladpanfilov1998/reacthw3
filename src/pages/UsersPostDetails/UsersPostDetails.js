import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {postService} from "../../services/post.service";

const UserPostDetails = () => {
    const {userId} = useParams();
    const [post, setPosts] = useState(null);
    useEffect(()=>{
        postService.getById(userId).then(value => setPosts({...value}))
    }, [])
    return (
        <div>
            {post && (
                <div>

                    <div>POST: {userId}</div>

                </div>
            )};
        </div>

    );
};

export default UserPostDetails