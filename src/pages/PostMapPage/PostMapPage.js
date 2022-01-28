import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import {Outlet, useParams} from "react-router-dom";
import css from "../../App.module.css";
import PostMapDetailsPage from "../PostMapDetailsPage/PostMapDetailsPage";



const PostMapPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        postService.getAll().then(value => setPosts([...value]));
    }, []);

    return (
        <div>
            {posts.map(post => <PostMapDetailsPage key={post.id} post={post}/>)}
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>

    );
};

export default PostMapPage;