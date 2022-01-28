import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";
import {UserDetailsPage} from "../UserDetailsPage/UserDetailsPage";
import {Outlet} from "react-router-dom";
import css from "../../App.module.css";



const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value => setUsers([...value]));
    }, []);

    return (
        <div>
            <h2>Users</h2>
            {users.map(user => <UserDetailsPage key={user.id} user={user}/>)}
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>

       );
};

export {UsersPage};