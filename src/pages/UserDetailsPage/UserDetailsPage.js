import React from 'react';
import {Link, Outlet} from "react-router-dom";


const UserDetailsPage = ({user: {id, name, username, email, phone, website}}) => {
    return (
        <div>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <div>USERNAME: {username}</div>
            <Link>
                <button>USER DETAILS</button>
            </Link>
            <div><Outlet/></div>

        </div>
    );
};

export {UserDetailsPage};