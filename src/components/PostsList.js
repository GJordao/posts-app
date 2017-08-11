// React
import React, { Component } from "react";
// React-Redux
import { connect } from "react-redux";
// Action creators
import { userFetchPosts } from "./../actions/api";
// Components
import Post from "./Post";

const styles = {
    container: {
        marginBottom: 60,
        marginTop: 100
    }
};

class PostsList extends Component {
    componentDidMount() {
        this.props.userFetchPosts();
    }

    renderPosts() {
        let render = [];
        this.props.posts.list.forEach((post, index) => {
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

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps, { userFetchPosts })(PostsList);
