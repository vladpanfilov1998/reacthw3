import {Link, Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/post.service";
import css from "../../App.module.css";

const SinglePostPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState(null);
    useEffect(()=>{
        postService.getById(id).then(value => setPosts({...value}))
    }, [])
    return (
        <div>
            {posts && (
                <div>
                    <div>ID: {posts.id}</div>
                    <div>UserID: {posts.userId}</div>
                    <div>Title: {posts.title}</div>
                    <div>Body: {posts.body}</div>
                    <Link to={'comments'}>
                        <button>COMMENTS</button>
                    </Link>
                </div>
            )}
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>

    );
};


export default SinglePostPage;