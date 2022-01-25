import React from 'react';
import {Outlet} from "react-router-dom";

const PostCommentsPage = () => {
    return (
        <div>
            PostCommentsPage
            <Outlet/>
        </div>
    );
};

export {PostCommentsPage};