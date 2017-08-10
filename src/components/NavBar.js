import React from "react";

const styles = {
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
        padding: 20
    }
};

const NavBar = props => {
    return (
        <div style={styles.navBar}>
            <div style={styles.title}>posts-app</div>
        </div>
    );
};

export default NavBar;
