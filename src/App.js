// React
import React, { Component } from "react";
// Components
import NavBar from "./components/NavBar";
import PostsList from "./components/PostsList";
import NewPost from "./components/NewPost";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <NewPost />
                <PostsList />
            </div>
        );
    }
}

export default App;
