import Header from "../../components/header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { DivFeed, Posts, DivHeaderFixed, DivCreatePost} from "./Styled-Feed";
import ListFeedPage from "./ListsFeedPage"
import PostPage from "../PostPage/PostPage";

const FeedPage = () => {
    useProtectedPage()   

    return(
        <DivFeed>
            <Posts>
                <DivHeaderFixed><Header/></DivHeaderFixed>
                <DivCreatePost><PostPage/></DivCreatePost>
                <div>
                   <ListFeedPage/>
                </div>
                </Posts>
    </DivFeed>
    )
  
}

export default FeedPage;