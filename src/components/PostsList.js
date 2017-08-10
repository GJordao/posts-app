import React, { Component } from "react";
// Components
import Post from "./Post";

const styles = {
    container: {
        marginBottom: 60,
        marginTop: 100
    }
};

class PostsList extends Component {
    renderPosts() {
        let render = [];
        for (var i = 0; i < 10; i++) {
            render.push(<Post />);
        }

        return render;
    }

    render() {
        return (
            <div style={styles.container}>
                {this.renderPosts()}
            </div>
        );
    }
}

export default PostsList;
