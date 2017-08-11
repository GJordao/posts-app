// Redux
import { combineReducers } from "redux";
// Reducers
import NewPost from "./NewPost";
import Posts from "./Posts";

export default combineReducers({
    newPost: NewPost,
    posts: Posts
});
