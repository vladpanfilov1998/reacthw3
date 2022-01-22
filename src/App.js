import {Routes, Route} from "react-router-dom";
import {Layout} from "./components";
import {PostDetailsPage, PostsPage, UserDetailsPage, UsersPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}/>
                </Route>

                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetailsPage/>}/>
                </Route>

            </Route>
        </Routes>
    );
};

export default App;
