// React
import React, { Component } from "react";
// Components
import NavBar from "./components/NavBar";
import Post from "./components/Post";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Post />
            </div>
        );
    }
}

export default App;
