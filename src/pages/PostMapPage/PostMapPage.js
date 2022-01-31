import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import {Outlet} from "react-router-dom";
import css from "../../App.module.css";
import PostMapDetailsPage from "../PostMapDetailsPage/PostMapDetailsPage";


    const PostMapPage = () => {
        const [posts, setPosts] = useState(null);
        useEffect((id) => {
            postService.getById(id).then(value => setPosts([...value]));
        }, []);

        return (
            <div>
                {posts.map(post => <PostMapDetailsPage key={post.userId} post={post}/>)}
                <div className={css.outlet}>
                    <Outlet/>
                </div>
            </div>

        );
    };



export default PostMapPage;