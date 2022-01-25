import {Routes, Route} from "react-router-dom";

import {Layout} from "./components";
import {PostsPage, UsersPage} from "./pages";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUserPage/>}/>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}/>
                    </Route>

                </Route>
            </Routes>
        </div>
    );
};

export default App;
