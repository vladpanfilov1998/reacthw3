import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import {useParams} from "react-router-dom";
import PostMapDetailsPage from "../PostMapDetailsPage/PostMapDetailsPage";


    const PostMapPage = () => {
        const {id} = useParams();
        const [userPosts, setUserPosts] = useState([]);
        useEffect(() => {
            postService.getByUserId(id).then(value => setUserPosts([...value]));
        }, [id]);

        return (
            <div>
                {userPosts.map(post => <PostMapDetailsPage key={post.id} post={post}/>)}
            </div>
        );
    };

export default PostMapPage;