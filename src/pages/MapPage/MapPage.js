import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import {Link, Outlet, useParams} from "react-router-dom";
import css from "../../App.module.css";
import PostMapDetailsPage from "../PostMapDetailsPage/PostMapDetailsPage";
import {MapDetailsPage} from "../MapDetailsPage/MapDetailsPage";
import {userService} from "../../services/user.service";


const MapPage = () => {
    const {posts} = useParams()
    const [post, setPost] = useState([]);
    useEffect(() => {
        userService.getAll(post).then(value => setPost([...value]));
    }, []);

    return (
        <div>
            {posts.map(posts => <MapDetailsPage key={posts.id} posts={posts}/>)}
            <div>
                <Outlet/>
            </div>
        </div>

    );
};



export default MapPage;


