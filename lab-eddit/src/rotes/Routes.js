import { BrowserRouter, Switch, Route} from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage";
import Error from "../components/Error"
import PostPage from "../pages/PostPage/PostPage";
import CommitPage from "../pages/CommitPage/CommitPage"

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path="/">
                <FeedPage/>
            </Route>
            <Route exact path="/Postagem/:id">
                <PostPage/>
            </Route>
            <Route exact path="/comentarios/:id">
                <CommitPage/>
            </Route>
            <Route>
                <Error/>
            </Route>
        </Switch>
        </BrowserRouter>
    )

}

export default Routes;