import {Routes, Route, Outlet} from "react-router-dom";

import {Layout} from "./components";
import {MapDetailsPage, PostCommentsPage, PostDetailsPage, PostsPage, UsersPage} from "./pages";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import PostMapPage from "./pages/PostMapPage/PostMapPage";
import PostMapDetailsPage from "./pages/PostMapDetailsPage/PostMapDetailsPage";
import CommentsMapPage from "./pages/CommentsMapPage/CommentsMapPage";
import CommentsMapDetailsPage from "./pages/CommentsMapDetailsPage/CommentsMapDetailsPage";
import MapPage from "./pages/MapPage/MapPage";


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
