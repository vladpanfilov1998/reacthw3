import React from 'react';
import css from "../../App.module.css";
import {Outlet} from "react-router-dom";

const MapDetailsPage = ({posts: {userId, id, title, body}}) => {
    return (
        <div>
            <div>userID: {userId}.</div>
            <div>ID: {id}.</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {MapDetailsPage};