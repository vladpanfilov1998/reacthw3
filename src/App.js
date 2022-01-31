import {Routes, Route, Outlet} from "react-router-dom";

import {Layout} from "./components";
import {PostsPage, UsersPage} from "./pages";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import PostMapPage from "./pages/PostMapPage/PostMapPage";
import CommentsMapPage from "./pages/CommentsMapPage/CommentsMapPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUserPage/>}>
                            <Route path={'posts'} element={<PostMapPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}>
                            <Route path={'comments'} element={<CommentsMapPage/>}/>
                        </Route>
                    </Route>

                </Route>

            </Routes>
            <Outlet/>

        </div>
    );
};

export default App;
