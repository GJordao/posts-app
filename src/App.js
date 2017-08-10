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
            isHidden: true
        }
    }

    toggleAddPost = () => {
        this.setState({
            isHidden: !this.state.isHidden
        });
    }

    render() {
        return (
            <div>
                <NavBar onClick={this.toggleAddPost} />
                <NewPost isHidden={this.state.isHidden} />
                <PostsList />
            </div>
        );
    }
}

export default App;
