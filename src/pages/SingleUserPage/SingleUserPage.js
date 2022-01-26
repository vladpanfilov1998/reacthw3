import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {userService} from "../../services/user.service";

const SingleUserPage = () => {
    const {id} = useParams();
    const [user, setUsers] = useState(null);
    useEffect(()=>{
        userService.getById(id).then(value => setUsers({...value}))
    }, [])
    return (
        <div>
            {user && (
                <div>
                    <div>ID: {id}</div>
                    <div>NAME: {user.name}</div>
                    <div>USERNAME: {user.username}</div>
                    <div>email: {user.email}</div>
                    <div>ADDRESS</div>
                    <div>Street: {user.address.street}</div>
                    <div>Suite: {user.address.suite}</div>
                    <div>City: {user.address.city}</div>
                    <div>zipcode: {user.address.zipcode}</div>
                    <div>geo:</div>
                    <div>lat: {user.address.geo.lat}</div>
                    <div>lng: {user.address.geo.lng}</div>
                    <div>Phone: {user.phone}</div>
                    <div>website: {user.website}</div>
                    <div>COMPANY: {user.company.name}</div>
                    <div>catchPhrase: {user.company.catchPhrase}</div>
                    <div>bs: {user.company.bs}</div>
                    <Link to={'posts'}>
                        <button>USER POSTS</button>
                    </Link>
                </div>
            )};
        </div>

    );
};

export default SingleUserPage