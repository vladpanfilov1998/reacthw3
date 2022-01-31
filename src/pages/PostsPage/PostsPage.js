import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import {Outlet} from "react-router-dom";
import css from "../../App.module.css";
import {PostDetailsPage} from "../PostDetailsPage/PostDetailsPage";



const PostsPage = () => {
    const [posts, setPost] = useState([]);

    useEffect(()=>{
        postService.getAll().then(value => setPost([...value]));
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            {posts.map(posts => <PostDetailsPage key={posts.id} posts={posts}/>)}
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>

    );
};

export {PostsPage};