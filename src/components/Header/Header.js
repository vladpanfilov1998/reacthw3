import React from 'react';
import css from "../../App.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </div>
    );
};

export default Header;