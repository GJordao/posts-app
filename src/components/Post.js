import React from "react";

const contentText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet nisl vulputate, scelerisque enim sed, suscipit nibh. Praesent ullamcorper elit erat, quis vehicula metus condimentum in. Proin pharetra quam euismod, pellentesque elit bibendum, imperdiet ipsum. Sed vehicula sit amet nisi ac euismod. Donec efficitur diam quis mauris aliquet vulputate. Mauris pretium leo dui, eget varius purus maximus a. Sed euismod pulvinar eleifend. Vestibulum consequat volutpat est, vel pulvinar justo gravida pulvinar. Suspendisse quis feugiat dolor. Nullam suscipit ac elit sit amet egestas. Maecenas egestas viverra nulla.`;

const styles = {
    container: {
        backgroundColor: "#fff7ea",
        boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: 5,
        cursor: "pointer",
        height: 200,
        marginLeft: 200,
        marginTop: 200,
        position: "relative",
        width: 600
    },
    content: {
        height: 145,
        overflowY: "scroll",
        paddingLeft: 15,
        paddingRight: 15,
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
    title: {
        backgroundColor: "#f2e7d5",
        color: "#587cb7",
        fontSize: 30,
        height: 40,
        padding: 5,
        paddingLeft: 15
    }
};

const Post = props => {
    return (
        <div style={styles.container}>
            <div style={styles.title}>Title</div>
            <div style={styles.content}>{contentText}</div>
            <div style={styles.footer}>
                <span style={styles.footerName}>Name</span>
                <span style={styles.footerDate}>posted at Date/Time</span>
            </div>
        </div>
    );
};

export default Post;
