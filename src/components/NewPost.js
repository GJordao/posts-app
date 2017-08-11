// React
import React, { Component } from "react";
// React-Redux
import { connect } from "react-redux";
// Action creators
import { hideNewPost } from "./../actions/newPost";
import { addPost } from "./../actions/posts";

const styles = {
    container: {
        backgroundColor: "#fce1b5",
        borderRadius: 5,
        boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        height: 250,
        left: 0,
        margin: "auto",
        position: "fixed",
        right: 0,
        width: 600,
        zIndex: 50
    },
    content: {
        backgroundColor: "transparent",
        border: 0,
        fontSize: 16,
        height: 155,
        marginLeft: 10,
        outline: "none",
        resize: "none",
        width: 580
    },
    contentContainer: {
        height: 160,
        marginTop: 10,
        width: "100%"
    },
    nameContainer: {
        borderColor: "#848484",
        borderTopStyle: "solid",
        borderTopWidth: 0.5,
        float: "left",
        marginLeft: 10
    },
    name: {
        backgroundColor: "transparent",
        border: 0,
        fontSize: 14,
        height: 40,
        outline: "none",
        width: 300
    },
    submit: {
        backgroundColor: "#afa8a8",
        border: "none",
        borderRadius: 3,
        color: "#2a5c99",
        cursor: "pointer",
        float: "right",
        fontSize: 16,
        height: 35,
        marginRight: 10,
        outlinde: "none",
        width: 100
    },
    title: {
        backgroundColor: "transparent",
        border: 0,
        color: "#587cb7",
        fontSize: 18,
        fontWeight: "bold",
        outline: "none",
        padding: 10,
        width: 580
    },
    titleContainer: {
        backgroundColor: "#efd09e",
        height: 40,
        width: "100%"
    }
};

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            name: ""
        };
    }

    handlePost = e => {
        e.preventDefault();
        this.props.addPost({
            title: this.state.title,
            content: this.state.content,
            name: this.state.name,
            date: new Date().toString()
        });
        this.props.hideNewPost();
        this.setState({
            title: "",
            content: "",
            name: ""
        });
    };

    handleTitleChange = event => {
        this.setState({ title: event.target.value });
    };

    handleContentChange = event => {
        this.setState({ content: event.target.value });
    };

    handleNameChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
        return (
            <form
                style={styles.container}
                hidden={this.props.hidden}
                onSubmit={this.handlePost}
            >
                <div style={styles.titleContainer}>
                    <input
                        style={styles.title}
                        placeholder="Title"
                        value={this.state.title}
                        type="text"
                        onChange={this.handleTitleChange}
                        required
                    />
                </div>
                <div style={styles.contentContainer}>
                    <textarea
                        value={this.state.content}
                        placeholder="What's happening?"
                        style={styles.content}
                        onChange={this.handleContentChange}
                        required
                    />
                </div>
                <span style={styles.nameContainer}>
                    <input
                        style={styles.name}
                        placeholder="Name"
                        value={this.state.name}
                        type="text"
                        onChange={this.handleNameChange}
                        required
                    />
                </span>
                <input style={styles.submit} type="submit" value="Post" />
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        hidden: state.newPost.hidden
    };
};

export default connect(mapStateToProps, { hideNewPost, addPost })(NewPost);
