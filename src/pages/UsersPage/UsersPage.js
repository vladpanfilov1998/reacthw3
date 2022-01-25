import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";
import {UserDetailsPage} from "../UserDetailsPage/UserDetailsPage";



const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value => setUsers([...value]));
    }, []);

    return (
        <div>
            <h2>Users</h2>
            {users.map(user => <UserDetailsPage key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersPage};