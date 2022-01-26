import React from 'react';
import {Link, Outlet} from "react-router-dom";



const PostDetailsPage = ({post: {id, userId, title}}) => {
    return (
        <div>
            <div>ID: {id}</div>
            <div>User ID: {userId}</div>
            <div>Title: {title}</div>
            <Link to={id.toString()}>
            <button>POST DETAILS</button>
        </Link>
            <div className={'singlePost'}><Outlet/></div>
        </div>

    );
};

export {PostDetailsPage};