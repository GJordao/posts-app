import React, { Component } from "react";

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
    handlePost = e => {
        e.preventDefault();
    };

    render() {
        return (
            <form
                style={styles.container}
                hidden={this.props.isHidden}
                onSubmit={this.handlePost}
            >
                <div style={styles.titleContainer}>
                    <input
                        style={styles.title}
                        placeholder="Title"
                        type="text"
                        required
                    />
                </div>
                <div style={styles.contentContainer}>
                    <textarea
                        placeholder="What's happening?"
                        style={styles.content}
                        required
                    />
                </div>
                <span style={styles.nameContainer}>
                    <input
                        style={styles.name}
                        placeholder="Name"
                        type="text"
                        required
                    />
                </span>
                <input style={styles.submit} type="submit" value="Post" />
            </form>
        );
    }
}

export default NewPost;
