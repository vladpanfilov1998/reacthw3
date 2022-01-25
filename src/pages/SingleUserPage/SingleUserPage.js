import {useParams} from "react-router-dom";
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
                    <div>Phone: {user.phone}</div>
                </div>
            )};
        </div>

    );
};

export default SingleUserPage