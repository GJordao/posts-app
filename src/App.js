// React
import React, { Component } from "react";
// Components
import NavBar from "./components/NavBar";
import PostsList from "./components/PostsList";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <PostsList />
            </div>
        );
    }
}

export default App;
