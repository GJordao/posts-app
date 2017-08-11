import api from "./../config/API";

export const RECEIVE_POSTS = "RECEIVE_POSTS";

const receivePosts = posts => {
    return {
        type: RECEIVE_POSTS,
        payload: posts
    };
};

export const userFetchPosts = () => {
    return function(dispatch) {
        api("get", "posts")
            .then(response => {
                dispatch(receivePosts(response));
            })
            .catch(err => {
                console.log(err);
            });
    };
};
