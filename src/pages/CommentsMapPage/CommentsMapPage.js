import {useEffect, useState} from "react";

import {commentsService} from "../../services/comments.service";
import {Outlet, useParams} from "react-router-dom";
import css from "../../App.module.css";
import CommentsMapDetailsPage from "../CommentsMapDetailsPage/CommentsMapDetailsPage";



const CommentsMapPage = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState(null);
    useEffect(()=>{
        commentsService.getById(postId).then(value => setComments({...value}));
    }, []);

    return (
        <div>
            {comments.map(comments => <CommentsMapDetailsPage key={comments.postId} comments={comments}/>)}
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>

    );
};

export default CommentsMapPage;