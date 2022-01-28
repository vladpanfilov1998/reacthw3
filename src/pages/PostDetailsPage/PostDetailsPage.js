import React from 'react';
import {Link} from "react-router-dom";


const PostDetailsPage = ({post: {id, title}}) => {
    return (
        <div>
            <div>Title: {title}</div>
            <Link to={id.toString()}>
            <button>POST DETAILS</button>
        </Link>

        </div>

    );
};

export {PostDetailsPage};