import {useEffect, useState} from "react";

import {commentsService} from "../../services/comments.service";
import {Outlet} from "react-router-dom";
import css from "../../App.module.css";
import CommentsMapDetailsPage from "../CommentsMapDetailsPage/CommentsMapDetailsPage";



const CommentsMapPage = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        commentsService.getAll().then(value => setComments([...value]));
    }, []);

    return (
        <div>
            {comments.map(comment => <CommentsMapDetailsPage key={comment.id} comment={comment}/>)}
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>

    );
};

export default CommentsMapPage;