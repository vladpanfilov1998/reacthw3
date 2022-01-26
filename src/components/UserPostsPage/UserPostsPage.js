import React from 'react';

const UserPostsPage = ({post: {userId, id, title, body}}) => {
    return (
        <div>
            <div>ID: {id}</div>
            <div>User ID: {userId.post}</div>
            <div>Title: {title}</div>
        </div>

    );
};

export {UserPostsPage};