import React from "react";

const styles = {
    icon: {
        cursor: "pointer",
        float: "right",
        height: 60,
        marginRight: 25,
        marginTop: 5,
        width: 60
    },
    navBar: {
        backgroundColor: "#222",
        boxShadow: "1px 2px 4px rgba(0, 0, 0, .5)",
        color: "white",
        fontSize: 72,
        height: 70,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100
    },
    title: {
        fontSize: 22,
        padding: 20,
        position: "absolute",
    }
};

const NavBar = props => {
    return (
        <div style={styles.navBar}>
            <span style={styles.title}>posts-app</span>
            <span>
                <img style={styles.icon} src={require("./../images/ios7-plus-empty.png")} {...props}  />
            </span>
        </div>
    );
};

export default NavBar;
