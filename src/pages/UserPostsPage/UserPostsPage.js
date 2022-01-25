import React from 'react';
import {Outlet} from "react-router-dom";

const UserPostsPage = () => {
    return (
        <div>
            UserPostsPage
            <Outlet/>
        </div>
    );
};

export {UserPostsPage};