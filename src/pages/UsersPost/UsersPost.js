import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import {UserDetailsPage} from "../UserDetailsPage/UserDetailsPage";
import UsersPostDetails from "../UsersPostDetails/UsersPostDetails";



const UsersPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
            .then(value => {
                setPosts([...value]);
            });
    }, []);
    return (
        <div>
            {posts.map(value => <UsersPostDetails key={value.id} item={value}/>)}
        </div>
    );
};

export {UsersPost};