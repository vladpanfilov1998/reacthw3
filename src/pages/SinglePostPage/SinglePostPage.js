import {Link, Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/post.service";
import css from "../../App.module.css";

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