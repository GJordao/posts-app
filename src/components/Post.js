import React, { Component } from "react";

const contentText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet nisl vulputate, scelerisque enim sed, suscipit nibh. Praesent ullamcorper elit erat, quis vehicula metus condimentum in. Proin pharetra quam euismod, pellentesque elit bibendum, imperdiet ipsum. Sed vehicula sit amet nisi ac euismod. Donec efficitur diam quis mauris aliquet vulputate. Mauris pretium leo dui, eget varius purus maximus a. Sed euismod pulvinar eleifend. Vestibulum consequat volutpat est, vel pulvinar justo gravida pulvinar. Suspendisse quis feugiat dolor. Nullam suscipit ac elit sit amet egestas. Maecenas egestas viverra nulla.`;

const styles = {
    container: {
        backgroundColor: "#fff7ea",
        boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: 5,
        height: 200,
        margin: "auto",
        marginTop: 50,
        position: "relative",
        width: 600
    },
    content: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        fontSize: 18,
        height: 125,
        overflowY: "scroll",
        paddingLeft: 15,
        resize: "none",
        width: 580
    },
    footer: {
        backgroundColor: "#fff2dd",
        borderColor: "#f2e7d5",
        borderTopStyle: "solid",
        borderTopWidth: 0.5,
        bottom: 0,
        position: "absolute",
        width: "100%"
    },
    footerDate: {
        float: "right",
        fontSize: 12,
        paddingRight: 15
    },
    footerName: {
        float: "left",
        fontSize: 12,
        paddingLeft: 15
    },
    icon: {
        cursor: "pointer",
        height: 30,
        width: 30,
        color: "green"
    },
    title: {
        backgroundColor: "transparent",
        border: "transparent",
        color: "#587cb7",
        fontSize: 30,
        height: 40,
        padding: 5,
        paddingLeft: 15,
        width: 550
    },
    topBar: {
        backgroundColor: "#f2e7d5"
    }
};

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        };
    }

    toggleDisabled = () => {
        this.setState({
            disabled: !this.state.disabled
        });
    };

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.topBar}>
                    <input
                        disabled={this.state.disabled}
                        style={styles.title}
                        type="text"
                        defaultValue={"Title"}
                    />
                    <img
                        onClick={this.toggleDisabled}
                        alt={this.state.disabled ? "Edit" : "Save"}
                        src={
                            this.state.disabled
                                ? require("./../images/ios7-compose-outline.png")
                                : require("./../images/ios7-checkmark.png")
                        }
                        style={styles.icon}
                    />
                </div>
                <textarea
                    disabled={this.state.disabled}
                    style={styles.content}
                    defaultValue={contentText}
                />
                <div style={styles.footer}>
                    <span style={styles.footerName}>Name</span>
                    <span style={styles.footerDate}>posted at Date/Time</span>
                </div>
            </div>
        );
    }
}

export default Post;
