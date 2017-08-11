export const SHOW_NEW_POST = "SHOW_NEW_POST";
export const HIDE_NEW_POST = "HIDE_NEW_POST";

export const showNewPost = () => {
    return {
        type: SHOW_NEW_POST
    }
}

export const hideNewPost = () => {
    return {
        type: HIDE_NEW_POST
    }
}