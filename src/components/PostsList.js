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
        this.props.posts.forEach((post, index) => {
            render.push(
                <Post
                    key={index}
                    index={index}
                    post={post}
                    removePost={this.props.removePost}
                />
            );
        });
        return render.reverse();
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
