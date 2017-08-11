export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";

export const addPost = (post) => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const removePost = (index) => {
    return {
        type: REMOVE_POST,
        payload: index
    }
}