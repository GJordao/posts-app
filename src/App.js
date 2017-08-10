// React
import React, { Component } from "react";
// Components
import NavBar from "./components/NavBar";
import PostsList from "./components/PostsList";
import NewPost from "./components/NewPost";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            posts: []
        };
    }

    toggleAddPost = () => {
        this.setState({
            isHidden: !this.state.isHidden
        });
    };

    addNewPost = post => {
        this.state.posts.push(post);
    };

    render() {
        return (
            <div>
                <NavBar onClick={this.toggleAddPost} />
                <NewPost
                    isHidden={this.state.isHidden}
                    addNewPost={this.addNewPost}
                    toggleAddPost={this.toggleAddPost}
                />
                <PostsList posts={this.state.posts} />
            </div>
        );
    }
}

export default App;
