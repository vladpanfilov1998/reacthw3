import {Routes, Route, Outlet} from "react-router-dom";

import {Layout} from "./components";
import {PostsPage, UsersPage} from "./pages";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import {UserPostsPage} from "./components/UserPostsPage/UserPostsPage";
import UserPostDetails from "./pages/UsersPostDetails/UsersPostDetails";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'users/:id'} element={<SingleUserPage/>}/>
                    <Route path={'posts/:userId'} element={<UserPostDetails/>}/>

                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'posts/:id'} element={<SinglePostPage/>}/>

                </Route>

            </Routes>
<Outlet/>

        </div>
    );
};

export default App;
