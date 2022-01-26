import React from 'react';
import {Link} from "react-router-dom";


const UserDetailsPage = ({user: {id, name}}) => {
    return (
        <div>
            <div>ID: {id}.</div>
            <div>NAME: {name}</div>
            <Link to={id.toString()}>
                <button>USER DETAILS</button>
            </Link>
        </div>
    );
};

export {UserDetailsPage};